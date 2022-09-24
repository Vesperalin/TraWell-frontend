import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '850px',
  padding: '30px',
  backgroundColor: theme.palette.common.dimmedWhite,
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
  borderRadius: '15px',

  [theme.breakpoints.down('md')]: {
    width: '90%',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

export const FirstInnerWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const SecondInnerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '160px',

  [theme.breakpoints.down('sm')]: {
    marginTop: '10px',
    height: 'auto',
    gap: '10px',
  },
}));

export const ButtonsWrapper = styled(Box)({
  display: 'flex',
  gap: '10px',
});

export const StyledLink = styled(Link)(({ theme }) => ({
  textTransform: 'uppercase',
  color: theme.palette.common.darkNavy,
  opacity: '0.5',
  fontWeight: '500',
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',

  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}));

export const MediumPrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.blue,
  color: theme.palette.common.dimmedWhite,
  width: '80px',

  '&:hover': {
    backgroundColor: '#36A4EE',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const SmallPrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.blue,
  color: theme.palette.common.dimmedWhite,
  display: 'none',
  width: '80px',

  '&:hover': {
    backgroundColor: '#36A4EE',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

export const MediumSecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.dimmedWhite,
  color: theme.palette.common.blue,
  borderColor: theme.palette.common.blue,
  borderWidth: '1px',
  borderStyle: 'solid',
  width: '80px',

  '&:hover, &:active': {
    backgroundColor: '#e4f1f9',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const SmallSecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.dimmedWhite,
  color: theme.palette.common.blue,
  borderColor: theme.palette.common.blue,
  borderWidth: '1px',
  borderStyle: 'solid',
  display: 'none',
  width: '80px',

  '&:hover, &:active': {
    backgroundColor: '#e4f1f9',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));
