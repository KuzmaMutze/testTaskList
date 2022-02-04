import Checkbox from '@mui/material/Checkbox/Checkbox';
import Typography from '@mui/material/Typography/Typography';
import React, { Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';

import { actions } from '../../redux/reducers/appReducer';
import { useStyles } from './Title.style';

type PropsType = {
    isSelectAll: boolean;
    setIsSelectAll: Dispatch<SetStateAction<boolean>>;
    isEmptyList: boolean;
};

export const Title: React.FC<PropsType> = ({ isSelectAll, setIsSelectAll, isEmptyList }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const handlerSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsSelectAll(event.target.checked);

        if (!isSelectAll) {
            dispatch(actions.selectAllAC());
        } else {
            dispatch(actions.delAllIdsAC());
        }
    };
    return (
        <div className={classes.boxTitles}>
            <div className={classes.title + ' ' + classes.emptyTitle}>
                <Checkbox
                    disabled={isEmptyList}
                    checked={isSelectAll}
                    onChange={handlerSelectAll}
                />
            </div>
            <Typography variant="h6" className={classes.title + ' ' + classes.titleOne}>
                Имя
            </Typography>
            <Typography variant="h6" className={classes.title}>
                Номер
            </Typography>
        </div>
    );
};
