import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/system';

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: '55px !important',
  height: '55px !important',

  [theme.breakpoints.down('md')]: {
    width: '40px !important',
    height: '40px !important',
  },
}));
