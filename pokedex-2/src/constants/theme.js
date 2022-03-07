import { createTheme } from '@mui/material/styles';
import { primaryColor} from './colors';

export const theme = createTheme({
  palette: {
    primary: {
    
      main: primaryColor,
       contrastText: "black"
    },
    text:{

    }
}
});

export default theme 