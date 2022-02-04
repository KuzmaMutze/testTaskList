import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper/Paper';
import { Container, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';

import { colorDelBtn, styleIconBtn, useStyles } from './Table.style';
import { AppStateType } from '../../redux/store';
import Modal from '../Modal/Modal';
import { Cell } from '../Cell/Cell';
import { Title } from '../Title/Title';
import { actions } from './../../redux/reducers/appReducer';

export const Table: React.FC = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const [isModal, setIsModal] = React.useState(false);
    const [isEdit, setIsEdit] = React.useState(false);
    const [isSelectAll, setIsSelectAll] = React.useState(false);
    const users = useSelector((state: AppStateType) => state.app.users);
    const selectIds = useSelector((state: AppStateType) => state.app.delIds);

    useEffect(() => {
        if (users.length) {
            setIsSelectAll(users.every(({ id }) => selectIds.includes(id)));
        } else {
            setIsSelectAll(false);
        }
    }, [users, selectIds]);

    const handleOpen = () => setIsModal(true);
    const handlerIsOpenEdit = () => {
        setIsEdit(true);
        handleOpen();
    };
    const handleClose = () => {
        setIsModal(false);
        setIsEdit(false);
    };
    const handlerDelUser = () => {
        selectIds.forEach((id) => dispatch(actions.delSelectsUsersAC(id)));
    };

    return (
        <Container className={classes.container} maxWidth="lg">
            <Paper className={classes.table} elevation={3}>
                <Title
                    isSelectAll={isSelectAll}
                    setIsSelectAll={setIsSelectAll}
                    isEmptyList={users.length < 1}
                />
                {users.map(({ id, name, tel }) => {
                    return <Cell key={id + Math.random()} id={id} name={name} tel={tel} />;
                })}
            </Paper>

            <Fab onClick={handleOpen} color="primary" aria-label="add" sx={styleIconBtn}>
                <AddIcon />
            </Fab>
            {selectIds.length !== 0 && (
                <div className={classes.setting}>
                    {selectIds.length <= 1 && (
                        <Fab onClick={handlerIsOpenEdit} color="primary" aria-label="edit">
                            <EditIcon />
                        </Fab>
                    )}
                    <Fab sx={colorDelBtn} onClick={handlerDelUser} aria-label="del">
                        <DeleteIcon />
                    </Fab>
                </div>
            )}
            <Modal isEdit={isEdit} isModal={isModal} handleClose={handleClose} />
        </Container>
    );
};
