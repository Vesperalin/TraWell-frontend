import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const StyledLogo = styled('img')(({ theme }) => ({
  display: 'inline-block',
  height: '45px',
  width: '150px',

  [theme.breakpoints.up('md')]: {
    height: '68px',
    width: '239px',
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  height: '45',

  [theme.breakpoints.up('md')]: {
    height: '68px',
    marginRight: '10px',
  },
}));
