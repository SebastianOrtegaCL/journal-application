import { createTheme } from "@mui/material";
import { red } from '@mui/material/colors';
export const theme = createTheme({
    palette: {
        primary: {
            main: '#aba4a4'
        },
        secondary: {
            main: '#b49dda',
        },
        error: {
            main: red.A400,
        }
    }
});