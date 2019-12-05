import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#64b5f6',
            contrastText: '#2979ff'
        }
    },
    overrides: {
        colorTextPrimary: {
            color: '#202020',
            fontWeight: 500,
        }
    }
});

export default theme;