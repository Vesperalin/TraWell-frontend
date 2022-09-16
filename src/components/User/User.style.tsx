import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Props } from './User';

type StyleProps = Pick<Props, 'isAvatarFirstDesktop' | 'isAvatarFirstMobile'>;

export const Wrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isAvatarFirstDesktop' && prop !== 'isAvatarFirstMobile',
})<StyleProps>(({ theme, isAvatarFirstDesktop, isAvatarFirstMobile }) => ({
  display: 'flex',
  flexDirection: isAvatarFirstDesktop ? 'row' : 'row-reverse',
  gap: '7px',

  [theme.breakpoints.down('md')]: {
    flexDirection: isAvatarFirstMobile ? 'row' : 'row-reverse',
  },
}));

export const Avatar = styled('img')(({ theme }) => ({
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

export const ReviewWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Icon = styled(StarIcon)(({ theme }) => ({
  color: theme.palette.common.orange,
}));
