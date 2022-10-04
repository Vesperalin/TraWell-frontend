import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.darkNavy,
  borderRadius: '10px',
  width: '90%',
  padding: '20px 50px',
  marginBottom: '50px',

  [theme.breakpoints.down('md')]: {
    padding: '20px',
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.blue,
}));

export const Error = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.lightRed,
  margin: '15px 0',
}));

export const RowWrapper = styled(Box)({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  margin: '15px 0',
  flexWrap: 'wrap',
});
