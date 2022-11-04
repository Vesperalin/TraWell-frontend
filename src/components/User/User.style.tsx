import StarIcon from '@mui/icons-material/Star';
import { Avatar as MUIAvatar } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Props } from './User';

type StyleProps = Pick<Props, 'isAvatarFirstDesktop' | 'isAvatarFirstMobile'>;

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isAvatarFirstDesktop' && prop !== 'isAvatarFirstMobile',
})<StyleProps>(({ theme, isAvatarFirstDesktop, isAvatarFirstMobile }) => ({
  display: 'flex',
  flexDirection: isAvatarFirstDesktop ? 'row' : 'row-reverse',
  gap: '7px',
  transition: 'all .2s ease-in-out',

  '&:hover': {
    transform: 'scale(1.05)',
    cursor: 'pointer',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: isAvatarFirstMobile ? 'row' : 'row-reverse',
  },
}));

export const ReviewWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isAvatarFirstDesktop' && prop !== 'isAvatarFirstMobile',
})<StyleProps>(({ theme, isAvatarFirstDesktop, isAvatarFirstMobile }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: isAvatarFirstDesktop ? 'flex-start' : 'flex-end',

  [theme.breakpoints.down('sm')]: {
    justifyContent: isAvatarFirstMobile ? 'flex-start' : 'flex-end',
  },
}));

export const Avatar = styled(MUIAvatar)(({ theme }) => ({
  height: '50px',
  width: '50px',
  borderRadius: '25px',

  [theme.breakpoints.down('md')]: {
    height: '40px',
    width: '40px',
  },
}));

export const AvatarWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    cursor: 'pointer',
  },
});

export const MediumIcon = styled(StarIcon)(({ theme }) => ({
  color: theme.palette.common.orange,

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const SmallIcon = styled(StarIcon)(({ theme }) => ({
  color: theme.palette.common.orange,
  display: 'none',

  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));
