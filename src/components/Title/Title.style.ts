import makeStyles from '@mui/styles/makeStyles/makeStyles';

export const useStyles = makeStyles({
    title: {
        width: '100%',
        padding: '15px 0',
        borderBottom: '1px solid rgba(0, 0, 0, 0.10)',
        textAlign: 'center',
    },
    titleOne: {
        borderRight: '1px solid rgba(0, 0, 0, 0.10)',
        borderLeft: '1px solid rgba(0, 0, 0, 0.10)',
    },
    boxTitles: {
        display: 'flex',
    },
    emptyTitle: {
        width: '15%',
    },
});
