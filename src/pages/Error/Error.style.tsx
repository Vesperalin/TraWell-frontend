import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const StyledImage = styled('img')(({ theme }) => ({
  display: 'inline-block',
  height: '520px',
  width: '800px',

  [theme.breakpoints.down('md')]: {
    height: '400px',
    width: '600px',
    marginTop: '30px',
  },

  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    width: '90%',
    marginTop: '50px',
  },
}));

export const StyledDesktopButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.navy,

  '&:hover': {
    backgroundColor: '#0252CE',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const StyledMobileButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.navy,

  '&:hover': {
    backgroundColor: '#0252CE',
  },

  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));
