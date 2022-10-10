import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  backgroundColor: theme.palette.common.dimmedWhite,
  boxShadow: '0px 3px 3px 2px rgba(0, 0, 0, 0.15)',
  borderRadius: '20px',
  padding: '20px 50px',
  gap: '20px',
  transition: 'all .2s ease-in-out',
  alignSelf: 'start',

  '&:hover': {
    transform: 'scale(1.03)',
  },

  [theme.breakpoints.down('md')]: {
    display: 'block',
    padding: '10px 20px',
  },
}));

export const InnerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  minWidth: '150px',

  [theme.breakpoints.up('lg')]: {
    minWidth: '180px',
  },

  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
