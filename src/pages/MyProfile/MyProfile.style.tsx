import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const StyledProfileWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  borderBottom: '1px solid rgba(6, 40, 61, 0.2)',
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',

  button: {
    alignSelf: 'center',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '15px',
    justifyContent: 'flex-start',
    padding: '0 10px 20px 10px',
  },
}));
