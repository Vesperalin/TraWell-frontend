import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '20px',
  alignItems: 'center',
});

export const StyledImage = styled('img')(({ theme }) => ({
  display: 'inline-block',
  height: '200px',
  width: '200px',

  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    width: '90%',
    marginTop: '50px',
  },
}));

export const NoVehicles = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.darkNavy,
}));
