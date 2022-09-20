import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const InnerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '30px',

  [theme.breakpoints.down('md')]: {
    gap: '20px',
  },
}));

export const StyledImage = styled('img')(({ theme }) => ({
  display: 'inline-block',
  height: '600px',
  width: '600px',

  [theme.breakpoints.down('md')]: {
    height: '500px',
    width: '500px',
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

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const StyledMobileButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.navy,

  '&:hover': {
    backgroundColor: '#0252CE',
  },

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const StyledHeading = styled(Typography)(({ theme }) => ({
  fontSize: '46px',
  fontWeight: 'bold',

  [theme.breakpoints.down('md')]: {
    fontSize: '32px',
  },
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  fontWeight: '400',
  textAlign: 'justify',

  [theme.breakpoints.down('md')]: {
    maxWidth: '50%',
  },
}));
