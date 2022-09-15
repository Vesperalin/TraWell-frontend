import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#FDFDFD',
  width: '100%',
  boxShadow: '0px 3px 3px 2px rgba(0, 0, 0, 0.15)',
  borderRadius: '10px',
  padding: '15px 70px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '10px 40px',
  },
}));

export const StyledArrow = styled('img')(({ theme }) => ({
  display: 'inline-block',
  height: '25px',
  width: '40px',
  margin: '0 20px',

  [theme.breakpoints.down('md')]: {
    transform: 'rotate(90deg)',
    height: '15px',
    width: '25px',
    margin: '7px 0',
  },
}));

export const Place = styled(Typography)({
  lineHeight: '26px',
});

export const ExactPlace = styled(Typography)({
  lineHeight: '24px',
  marginLeft: '7px',
});

export const Date = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.navy,
  paddingRight: '20px',
  fontWeight: '700',
}));

export const Time = styled(Typography)({
  fontWeight: '500',
  paddingLeft: '5px',
});

export const PlacesBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  margin: '7px 0',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '0',
  },
}));

export const PlaceBox = styled(Box)({
  display: 'flex',
  alignItems: 'flex-end',
});

export const DateBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '7px 0',

  [theme.breakpoints.down('md')]: {
    margin: '2px 0 0 0 ',
  },
}));

export const TimeBox = styled(Box)({
  display: 'flex',
});
