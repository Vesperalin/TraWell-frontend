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
  rowGap: '20px',
  flexWrap: 'wrap',
  marginBottom: '40px',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '10px 40px',
  },
}));

export const StyledArrow = styled('img')({
  display: 'flex',
  justifyContent: 'center',
  transform: 'rotate(90deg)',
  height: '25px',
  width: '40px',
});

export const Place = styled(Typography)({
  lineHeight: '26px',
  marginRight: '7px',
  alignSelf: 'flex-start',
});

export const ExactPlace = styled(Typography)({
  lineHeight: '24px',
  alignSelf: 'flex-start',
});

export const Date = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.navy,
  fontWeight: '700',
}));

export const PlacesBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  rowGap: '10px',
  marginRight: '20px',
});

export const PlaceBox = styled(Box)({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
});

export const DateBox = styled(Box)({
  display: 'flex',
  gap: '10px',
});
