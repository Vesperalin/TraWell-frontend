import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '40px',
  backgroundColor: theme.palette.common.darkNavy,
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '20px',
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.blue,
}));

export const UpperWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  columnGap: '30px',
});

export const LeftUpperWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '30px',
  flexGrow: '1',
});

export const ButtonWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '10px',
});
