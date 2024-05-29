import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF7F11', // Orange for buttons and highlights
    },
    secondary: {
      main: '#333333', // Dark grey for text
    },
    background: {
      default: '#FFFFFF', // White background
      paper: '#F5F5F5', // Light grey for cards and sections
      dark:'#000000'

    },
    text: {
      primary: '#333333', // Dark grey for primary text
      secondary: '#666666', // Lighter grey for secondary text
      white: '#ffffff', // Lighter grey for secondary text
    },
  },
  typography: {
     fontFamily: "Rubik, sans-serif",
    h1: {
      fontSize: '2.5rem', // Main title font size
      fontWeight: 700,
    },
    title: {
      fontSize: '4.5rem', // Main title font size
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem', // Subtitle font size
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.25rem', // Section headers font size
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem', // Default body text size
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem', // Smaller body text
      fontWeight: 400,
    },
    body3: {
      fontSize: '0.575rem', // Smaller body text
      fontWeight: 400,
    },
    button: {
      fontSize: '1rem', // Button text size
      fontWeight: 600,
      textTransform: 'none', // Disable uppercase transformation
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0', // Rounded corners for buttons
          padding: '10px 20px',
         
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Rounded corners for cards
          padding: '20px',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: '20px',
          paddingBottom: '20px',
        },
      },
    },
  },
});

export default theme;
