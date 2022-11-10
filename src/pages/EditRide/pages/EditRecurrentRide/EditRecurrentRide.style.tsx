import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Form = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '30px',
  backgroundColor: theme.palette.common.darkNavy,
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.blue,
}));

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.lightRed,
}));

export const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.dimmedWhite,
}));

export const InnerWrapper = styled(Box)({
  display: 'flex',
  width: '100%',
  columnGap: '30px',
  flexWrap: 'wrap',
  rowGap: '20px',
});

export const RightWrapper = styled(Box)(({ theme }) => ({
  flexGrow: '1',
  flexWrap: 'wrap',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const UpperWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  columnGap: '30px',
  flexWrap: 'wrap',
  rowGap: '20px',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const DescriptionWrapper = styled(Box)({
  margin: '20px 0',
  flexGrow: '1',
});

export const ButtonWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '10px',
});
export const StyledSkeleton = styled(Skeleton)({
  width: '100%',
});
