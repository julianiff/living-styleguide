import {createMuiTheme} from '@material-ui/core/styles';

export default createMuiTheme({
    typography: {
        fontFamily: [
            '"Raleway"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    }
});
