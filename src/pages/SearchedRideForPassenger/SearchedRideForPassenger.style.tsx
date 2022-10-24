import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  paddingBottom: '20px',
  gap: '20px',
});

export const BackButton = styled(Button)(({ theme }) => ({
  margin: '10px 0 0 0',
  alignSelf: 'flex-start',
  paddingLeft: '0',
  backgroundColor: 'transparent',
  color: theme.palette.common.darkNavy,
  opacity: '0.5',

  '&:hover': {
    backgroundColor: 'transparent',
    color: '#05172C',
    opacity: '0.7',
  },

  [theme.breakpoints.down('sm')]: {
    margin: '5px 0 0 0',
  },
}));

export const DataWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const ButtonWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'none',

  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
}));
