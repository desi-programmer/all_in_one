import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: [
            'Outfit',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    palette: {
        type: 'light',
        primary: {
            main: '#940332',
        },
        secondary: {
            main: '#f50057',
        },
    },
});