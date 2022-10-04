import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '50px 0 20px 0',
  width: '100%',

  [theme.breakpoints.down('md')]: {
    margin: '30px 0',
  },
}));
