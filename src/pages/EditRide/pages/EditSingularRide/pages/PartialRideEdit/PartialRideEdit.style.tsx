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

export const SectionWrapper = styled(Box)({
  margin: '5px 0',
});

export const DescriptionWrapper = styled(Box)({
  marginTop: '10px',
});

export const ButtonWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '10px',
});
