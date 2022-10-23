import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '20px',
});

export const DataWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const ButtonWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'none',

  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
}));
