import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '5px',
  alignItems: 'center',
  margin: '25px 0',

  [theme.breakpoints.down('sm')]: {
    margin: '0 0 15px 0',
  },
}));

export const CarImage = styled(DirectionsCarIcon)(({ theme }) => ({
  width: '30px',
  height: '30px',
  color: theme.palette.common.navy,

  [theme.breakpoints.down('sm')]: {
    width: '20px',
    height: '20px',
  },
}));

export const StyledText = styled(Typography)({
  fontWeight: '400',
});
