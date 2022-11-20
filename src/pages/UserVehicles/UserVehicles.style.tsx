import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)({
  width: '90%',
  display: 'flex',
  columnGap: '40px',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

export const LeftWrapper = styled(Box)(({ theme }) => ({
  marginBottom: '40px',
  width: 'calc(50% - 20px)',
  minWidth: '330px',

  [theme.breakpoints.down('sm')]: {
    minWidth: 'auto',
    width: '100%',
  },
}));

export const RightWrapper = styled(Box)(({ theme }) => ({
  width: 'calc(50% - 20px)',
  minWidth: '330px',

  [theme.breakpoints.down('sm')]: {
    minWidth: 'auto',
    width: '100%',
  },
}));

export const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.darkNavy,
  display: 'inline-block',
  marginBottom: '15px',
}));
