import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper/Paper';
import { Container } from '@mui/material';

import { useSelector } from 'react-redux';

import { useStyles } from './Table.style';
import { AppStateType } from '../../redux/store';
import Modal from '../Modal/Modal';
import { Cell } from '../Cell/Cell';
import { Title } from '../Title/Title';
import { BtnsGroup } from '../BtnsGroup/BtnsGroup';

export const Table: React.FC = () => {
    const classes = useStyles();

    const [isModal, setIsModal] = React.useState(false);
    const [isEdit, setIsEdit] = React.useState(false);
    const [isSelectAll, setIsSelectAll] = React.useState(false);
    const users = useSelector((state: AppStateType) => state.app.users);
    const selectIds = useSelector((state: AppStateType) => state.app.selectedIds);

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

    return (
        <Container className={classes.container} maxWidth="lg">
            <Paper className={classes.table} elevation={3}>
                <Title
                    isSelectAll={isSelectAll}
                    setIsSelectAll={setIsSelectAll}
                    isEmptyList={users.length < 1}
                />
                {users.map(({ id, name, tel }) => (
                    <Cell key={id + Math.random()} id={id} name={name} tel={tel} />
                ))}
            </Paper>

            <BtnsGroup
                handleOpen={handleOpen}
                selectIds={selectIds}
                handlerIsOpenEdit={handlerIsOpenEdit}
            />
            <Modal isEdit={isEdit} isModal={isModal} handleClose={handleClose} />
        </Container>
    );
};
