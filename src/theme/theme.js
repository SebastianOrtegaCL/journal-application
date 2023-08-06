import { createTheme } from "@mui/material";
import { red } from '@mui/material/colors';
export const theme = createTheme({
    palette: {
        primary: {
            main: '#111118'
        },
        secondary: {
            main: '#b49dda',
        },
        error: {
            main: red.A400,
        }
    }
});