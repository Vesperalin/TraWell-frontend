import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.dimmedWhite,
  maxWidth: '270px',
  width: '100%',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
