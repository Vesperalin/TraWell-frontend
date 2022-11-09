import Box from '@mui/material/Box';
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
});

export const RightWrapper = styled(Box)({
  flexGrow: '1',
});

export const UpperWrapper = styled(Box)({
  display: 'flex',
  columnGap: '30px',
});

export const DescriptionWrapper = styled(Box)({
  marginTop: '20px',
  flexGrow: '1',
});

export const ButtonWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '10px',
});
