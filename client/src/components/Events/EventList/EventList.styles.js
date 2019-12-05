import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    actionsBar: {
        backgroundColor: '#eceff1',
    },
    buttonsGroup: {
        backgroundColor: 'white',
        '& button': {
            padding: 6,
            height: 29,
            boxSizing: 'content-box'
        }
    },
    eventsSearch: {
        width: '100%',
        backgroundColor: 'white',
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