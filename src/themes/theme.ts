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

theme.typography.h4 = {
  fontSize: '15px',
  fontWeight: '700',
  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '18px',
  },
};

theme.typography.h5 = {
  fontSize: '14px',
  fontWeight: '300',
  [theme.breakpoints.up('md')]: {
    fontSize: '15px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '17px',
  },
};

theme.typography.caption = {
  fontSize: '13px',
  fontWeight: '400',
  [theme.breakpoints.up('md')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '16px',
  },
};

theme.typography.subtitle2 = {
  fontSize: '15px',
  fontWeight: '500',
  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '18px',
  },
};

export { theme };
