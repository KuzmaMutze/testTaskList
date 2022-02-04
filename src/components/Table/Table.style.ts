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
    container: {
        height: '100%',
    },
    table: {
        width: '100%',
        height: 650,
        overflow: 'auto',
    },
    setting: {
        position: 'absolute',
        bottom: 25,
        left: 25,
        '& button': {
            margin: '0 10px',
        },
    },
});
