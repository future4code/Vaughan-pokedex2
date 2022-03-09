import { createTheme } from '@mui/material/styles';
import { primaryColor, neutralColor } from './colors';

export const theme = createTheme({
  palette: {
    primary: {

      main: primaryColor,
      contrastText: "black"
    },
    text: {

    },
    secondary: {
      main: neutralColor
    }
  }
});

export default theme 