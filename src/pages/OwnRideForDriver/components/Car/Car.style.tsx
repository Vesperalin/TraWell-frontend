import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)({
  display: 'flex',
  gap: '5px',
  alignItems: 'center',
});

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
