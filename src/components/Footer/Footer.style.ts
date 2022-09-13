import { styled } from '@mui/system';

export const Footer = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.common.darkNavy,
  height: '45px',
  color: theme.palette.common.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    height: '36px',
  },
}));
