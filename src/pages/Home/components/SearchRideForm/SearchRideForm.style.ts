import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.darkNavy,
  borderRadius: '10px',
  width: '90%',
  padding: '25px 50px',
  marginBottom: '50px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',

  [theme.breakpoints.down('md')]: {
    padding: '20px',
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.dimmedWhite,
}));

export const Error = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.lightRed,
  margin: '15px 0',
  fontWeight: '500',
}));

export const RowWrapper = styled(Box)({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  margin: '15px 0',
  flexWrap: 'wrap',
});

export const ButtonWrapper = styled(Box)(({ theme }) => ({
  margin: '30px 0 15px 0',

  [theme.breakpoints.down('md')]: {
    margin: '20px 0 5px 0',
  },
}));
