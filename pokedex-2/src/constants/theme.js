import { createTheme } from '@mui/material/styles';
import { primaryColor } from './colors';

export const theme = createTheme({
  palette: {
    primary: {

      main: primaryColor,
      contrastText: "black"
    },
    text: {

    },
    secondary: {
      main: "#603387"
    }
  }
});

export default theme 