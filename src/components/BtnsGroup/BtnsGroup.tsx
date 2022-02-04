import React from 'react';
import Fab from '@mui/material/Fab/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { colorDelBtn, styleIconBtn, useStyles } from './BtnsGroup.style';
import { actions } from '../../redux/reducers/appReducer';
import { useDispatch } from 'react-redux';

type PropsType = {
    handleOpen: () => void;
    selectIds: Array<number>;
    handlerIsOpenEdit: () => void;
};
export const BtnsGroup: React.FC<PropsType> = ({ handleOpen, selectIds, handlerIsOpenEdit }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const handlerDelUser = () => {
        selectIds.forEach((id) => dispatch(actions.delSelectsUsersAC(id)));
    };

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};
