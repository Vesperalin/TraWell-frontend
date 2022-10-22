import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const OuterWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
});

export const Wrapper = styled(Box)({
  display: 'flex',
  alignItems: 'flex-end',
  width: '100%',
  flexWrap: 'wrap',
});

export const TimeAndArrowWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  margin: '15px 0',
});

export const Time = styled(Typography)({
  marginRight: '7px',
  fontWeight: '400',
});

export const City = styled(Typography)({
  marginRight: '7px',
});

export const Place = styled(Typography)({
  fontWeight: '400',
});

export const TimeLength = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.navy,
  fontWeight: '400',
}));

export const StyledArrow = styled('img')({
  display: 'inline-block',
  transform: 'rotate(90deg)',
  height: '30px',
  width: '40px',
});
