import { makeStyles } from '@mui/styles';

export const btnStyle = {
    borderRadius: 0,
    padding: '10px',
    width: '100%',
    boxShadow: 0,
    '&:hover': {
        boxShadow: 0,
    },
};

export const useStyles = makeStyles({
    name: {
        width: '100%',
        padding: '15px 0',
        borderRight: '1px solid rgba(0, 0, 0, 0.10)',
        borderLeft: '1px solid rgba(0, 0, 0, 0.10)',
    },
    tel: {
        padding: '15px 0',
        width: '100%',
    },
    btns: {
        padding: '5px 0',
        width: '15%',
        display: 'flex',
        justifyContent: 'center',
    },
    cell: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
        textAlign: 'center',
        display: 'flex',
    },
});
