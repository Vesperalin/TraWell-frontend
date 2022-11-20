import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.darkNavy,
  borderRadius: '10px',
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '20px',
}));

export const ButtonSection = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '20px 0',
});

export const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.dimmedWhite,
  fontWeight: '400',
}));

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.lightRed,
}));
