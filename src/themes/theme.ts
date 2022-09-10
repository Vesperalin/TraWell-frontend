import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    common: {
      darkNavy: '#06283D',
      navy: '#1363DF',
      blue: '#47B5FF',
      dimmedWhite: '#F6F8FA',
      orange: '#FCA311',
      darkRed: '#DF1313',
      lightRed: '#FF5151',
      green: '#1E951E',
      white: '#FFFFFF',
    },
  },
});

theme.typography.caption = {
  fontSize: '10px',
  fontWeight: '400',
  [theme.breakpoints.up('md')]: {
    fontSize: '14px',
  },
};

theme.typography.subtitle2 = {
  fontSize: '16px',
  fontWeight: '500',
  [theme.breakpoints.up('md')]: {
    fontSize: '18px',
  },
};

export { theme };
