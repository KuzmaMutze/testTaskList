import { makeStyles } from '@mui/styles';

export const styleIconBtn = {
    position: 'absolute',
    bottom: 25,
    right: 25,
};

export const colorDelBtn = {
    background: '#d32f2f',
    color: 'white',
    '&:hover': {
        background: '#c62828',
    },
};

export const useStyles = makeStyles({
    setting: {
        position: 'absolute',
        bottom: 25,
        left: 25,
        '& button': {
            margin: '0 10px',
        },
    },
});
