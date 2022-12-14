import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '30px',
  backgroundColor: theme.palette.common.dimmedWhite,
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
  borderRadius: '15px',
  width: '100%',
  columnGap: '5px',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

export const InnerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '140px',
  gap: '10px',

  [theme.breakpoints.down('sm')]: {
    marginTop: '10px',
    height: 'auto',
    gap: '25px',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));

export const StyledDetailsRideButton = styled(Button)(({ theme }) => ({
  textTransform: 'uppercase',
  color: theme.palette.common.blue,
  backgroundColor: theme.palette.common.dimmedWhite,
  fontWeight: '500',
  fontSize: '15px',
  borderRadius: '5px',
  padding: '6px 18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: '1px',
  borderColor: theme.palette.common.blue,
  borderStyle: 'solid',

  '&:hover': {
    backgroundColor: '#e4f1f9',
  },

  span: {
    marginRight: '5px',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '13px',
    padding: '5px 14px',
    width: '105px',
  },
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.blue,
  fontWeight: '400',

  '&::first-letter': {
    textTransform: 'uppercase',
  },
}));
