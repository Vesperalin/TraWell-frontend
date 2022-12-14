import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const StyledBox = styled(Box)({
  flexGrow: '1',
  height: '75px',
  display: 'flex',
  justifyContent: 'flex-end',
});

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  '&.active': {
    backgroundColor: theme.palette.common.dimmedWhite,
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  color: theme.palette.common.blue,
  padding: '15px 20px',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: theme.palette.common.dimmedWhite,
  },
  '&:active': {
    backgroundColor: '#F3F5F7',
  },

  [theme.breakpoints.down(980)]: {
    fontSize: '14px',
  },
}));
