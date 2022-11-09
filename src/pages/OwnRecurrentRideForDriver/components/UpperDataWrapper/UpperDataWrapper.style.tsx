import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const DataWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    justifyContent: 'space-between',
  },
}));

export const RecurrentRide = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.navy,
  display: 'flex',
  alignItems: 'center',
  columnGap: '7px',
}));

export const RideType = styled(Typography)({
  marginLeft: '30px',
  fontWeight: '400',
});
