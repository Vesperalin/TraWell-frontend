import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'flex-start',
  backgroundColor: '#F6F8FA',
  borderRadius: '10px',
  paddingBottom: '20px',
  height: '350px',
});

export const RidesWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  overflowY: 'scroll',
  padding: '0 20px 20px 20px',
});

export const DateWrapper = styled(Box)({
  width: '200px',
  marginLeft: '20px',

  'fieldset > legend > span': {
    display: 'none',
  },
});

export const Label = styled(Typography)(({ theme }) => ({
  fontWeight: '400',
  color: theme.palette.common.darkNavy,
  marginLeft: '20px',
  marginTop: '20px',
}));

export const NoPassengersLabelWrapper = styled(Box)({
  height: '250px',
  width: '220px',
  padding: '20px',
  display: 'flex',
  borderRadius: '10px',
  justifyContent: 'center',
});

export const NoPassengersLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.dimmedWhite,
  marginTop: '10px',
  textAlign: 'center',
}));

export const RideWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '5px',
  backgroundColor: '#47b5ffcf',
  color: theme.palette.common.dimmedWhite,
  width: '200px',
  borderRadius: '10px',
  padding: '15px',
}));
