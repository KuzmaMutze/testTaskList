import * as React from 'react';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField/TextField';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { styleBox, useStyles } from './Modal.style';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { actions } from '../../redux/reducers/appReducer';

type PropsType = {
    isModal: boolean;
    handleClose: () => void;
    isEdit?: boolean;
};

type FieldSchemaType = {
    name: string;
    tel: string;
};

const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const fieldSchema = yup.object().shape({
    name: yup.string().required('Введите имя'),
    tel: yup.string().matches(phoneRegExp, 'Не корректный номер').required('Введите номер'),
});

const BasicModal: React.FC<PropsType> = ({ isModal, handleClose, isEdit }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldSchemaType>({
        resolver: yupResolver(fieldSchema),
    });
    const errorName = errors.name?.message;
    const errorTel = errors.tel?.message;

    const nextUserId = useSelector((state: AppStateType) => state.app.users.length + 1);

    const onSubmit = (values: FieldSchemaType) => {
        dispatch(actions.addUserAC({ id: nextUserId, ...values }));
        handleClose();
    };

    return (
        <div>
            <Modal open={isModal} onClose={handleClose}>
                <Box sx={styleBox}>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            control={control}
                            name="name"
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    error={!!errorName}
                                    label={errorName ? errorName : 'Имя'}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="tel"
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    error={!!errorTel}
                                    label={errorTel ? errorTel : 'Телефон'}
                                />
                            )}
                        />

                        <Button type="submit" variant="contained" color="primary">
                            {isEdit ? 'Изменить' : 'Добавить'}
                        </Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default BasicModal;
