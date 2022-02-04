import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { btnStyle, useStyles } from '../Cell/Cell.style';

import Button from '@mui/material/Button/Button';
import { Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/reducers/appReducer';
import { AppStateType } from '../../redux/store';

type PropsType = {
    id: number;
    name: string;
    tel: string;
};
export const Cell: React.FC<PropsType> = ({ id, name, tel }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [isSelect, setIsSelect] = useState(false);
    const activeUserId = useSelector((state: AppStateType) => state.app.delIds);

    useEffect(() => {
        if (activeUserId.includes(id)) {
            setIsSelect(true);
        } else {
            setIsSelect(false);
        }
    }, [activeUserId]);

    const handleIsSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsSelect(event.target.checked);

        if (!isSelect) {
            dispatch(actions.selectUserAC(id));
        } else {
            dispatch(actions.delSelectIdAC(id));
        }
    };

    return (
        <div className={classes.cell}>
            <div className={classes.btns}>
                <Checkbox checked={isSelect} onChange={handleIsSelect} />
            </div>
            <div className={classes.name}>{name}</div>
            <div className={classes.tel}>{tel}</div>
        </div>
    );
};
