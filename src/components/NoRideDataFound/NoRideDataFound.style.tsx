import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '-60px',

  [theme.breakpoints.down('md')]: {
    marginTop: '-40px',
  },
}));

export const StyledImage = styled('img')(({ theme }) => ({
  display: 'inline-block',
  height: '400px',
  width: '400px',

  [theme.breakpoints.down('md')]: {
    height: '350px',
    width: '350px',
  },

  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    width: '90%',
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  marginTop: '-30px',

  span: {
    fontWeight: '500',
  },

  [theme.breakpoints.down('md')]: {
    marginTop: '-10px',
  },
}));

export const StyledDesktopButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.navy,
  marginTop: '20px',

  '&:hover': {
    backgroundColor: '#0252CE',
  },

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const StyledMobileButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.navy,
  marginTop: '20px',

  '&:hover': {
    backgroundColor: '#0252CE',
  },

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
