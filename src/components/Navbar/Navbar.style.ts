import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/system';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1); !important',
}));

export const MobileWrapper = styled('nav')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const DesktopWrapper = styled('nav')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
