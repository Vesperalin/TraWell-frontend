import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const StyledLogo = styled('img')(({ theme }) => ({
  display: 'inline-block',
  height: '36px',
  width: '121px',

  [theme.breakpoints.up('md')]: {
    height: '68px',
    width: '239px',
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  height: '36px',

  [theme.breakpoints.up('md')]: {
    height: '68px',
    marginRight: '10px',
  },
}));
