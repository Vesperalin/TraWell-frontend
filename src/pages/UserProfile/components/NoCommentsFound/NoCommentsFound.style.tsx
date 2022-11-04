import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const StyledImage = styled('img')(({ theme }) => ({
  display: 'inline-block',
  height: '620px',
  width: '620px',

  [theme.breakpoints.down('md')]: {
    height: '520px',
    width: '520px',
    marginTop: '30px',
  },

  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    width: '90%',
    marginTop: '50px',
  },
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  marginTop: '-80px',
  color: theme.palette.common.darkNavy,

  [theme.breakpoints.down('md')]: {
    marginTop: '-60px',
  },

  [theme.breakpoints.down('sm')]: {
    marginTop: '-40px',
  },
}));
