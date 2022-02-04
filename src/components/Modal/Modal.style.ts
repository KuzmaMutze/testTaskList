import makeStyles from '@mui/styles/makeStyles/makeStyles';

export const styleBox = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 570,
    width: '100%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '5px',
};

export const useStyles = makeStyles({
    form: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
