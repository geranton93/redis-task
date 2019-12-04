import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    eventsSearch: {
        width: '100%',
        '& input': {
            padding: 6,
            height: 31
        }
    },
    searchIcon: {
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8
    }
});