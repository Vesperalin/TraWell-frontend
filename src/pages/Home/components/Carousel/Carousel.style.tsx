import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Carousel from 'react-material-ui-carousel';

export const StyledCarousel = styled(Carousel)(({ theme }) => ({
  width: '90%',
  height: '475px',

  '.css-1abc02a > button:nth-of-type(1), .css-hn784z > button:nth-of-type(1)': {
    position: 'relative',
    top: '190px !important',
  },

  [theme.breakpoints.down('md')]: {
    height: 'auto',
  },
}));

export const Element = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: '1',
  },
}));

export const StyledImage = styled('img')(({ theme }) => ({
  objectFit: 'cover',
  height: '100%',
  width: '275px',
  borderRadius: '10px 0 0 10px',
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',

  [theme.breakpoints.down('md')]: {
    borderRadius: '10px 10px 0 0 ',
    width: '100%',
    height: '200px',
    objectPosition: 'left 50%',
  },

  [theme.breakpoints.down('sm')]: {
    borderRadius: '10px 10px 0 0 ',
    width: '100%',
    height: '200px',
    objectPosition: 'left 60%',
  },
}));

export const TextWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.dimmedWhite,
  borderRadius: '0 10px 10px 0',
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
  textAlign: 'center',
  padding: '120px 70px 0 70px',

  [theme.breakpoints.down('md')]: {
    borderRadius: '0 0 10px 10px',
    padding: '0 40px',
    flexGrow: '1',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  [theme.breakpoints.down('sm')]: {
    borderRadius: '0 0 10px 10px',
    padding: '0 20px',
    flexGrow: '1',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontWeight: '400',
  textAlign: 'justify',
  marginTop: '20px',

  [theme.breakpoints.down('md')]: {
    marginTop: '20px',
  },

  [theme.breakpoints.down('sm')]: {
    marginTop: '10px',
  },
}));
