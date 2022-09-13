import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const StyledMenu = styled(Menu)(({ theme }) => ({
  marginTop: '50px',

  [theme.breakpoints.down('md')]: {
    marginTop: '30px',
  },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  paddingTop: '10px',
  paddingBottom: '10px',
  color: theme.palette.common.darkNavy,
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  marginLeft: '15px',
  textAlign: 'center',

  [theme.breakpoints.down('md')]: {
    marginLeft: '10px',
  },
}));
