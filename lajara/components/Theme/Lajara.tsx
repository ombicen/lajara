import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    typography: {
        fontFamily: [
            'Poppins',
            'Helvetica',
            'Arial'
        ].join(','),
    },
});
export default theme;