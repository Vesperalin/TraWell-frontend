import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  margin: '6px 0',
  flexWrap: 'wrap',
});

export const Date = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.navy,
  marginRight: '15px',
}));

export const Time = styled(Typography)({
  lineHeight: '24px',
  marginRight: '7px',
  fontWeight: '400',
});

export const Place = styled(Typography)({
  lineHeight: '26px',
  marginRight: '7px',
  overflowWrap: 'anywhere',
});

export const ExactPlace = styled(Typography)({
  lineHeight: '24px',
  overflowWrap: 'anywhere',
});

export const TimeLength = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.navy,
}));

export const StyledArrow = styled('img')({
  display: 'inline-block',
  transform: 'rotate(90deg)',
  height: '20px',
  width: '30px',
});
