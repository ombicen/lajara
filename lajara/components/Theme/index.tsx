import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#2E8F3D',
        },
        background: {
            default: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Poppins',
        fontSize: 16,
        h1: {
            fontFamily: 'Lora',
            fontSize: 36,
        },
        h2: {
            fontSize: 36,
            fontFamily: 'Lora',
        },
        h3: {
            fontSize: 34,
            fontWeight: 500,
        },
        button: {
            textTransform: 'none'
        }
    },
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    borderRadius: '100px',
                },
            },
        },
    },
    props: {
        MuiAppBar: {
            color: 'transparent',
        },

    },
});
export default theme;