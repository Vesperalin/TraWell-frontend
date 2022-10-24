import StarIcon from '@mui/icons-material/Star';
import { Avatar as MUIAvatar } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const StyledUserWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const AvatarAndReviewWrapper = styled(Box)({
  display: 'flex',
  gap: '10px',
});

export const Avatar = styled(MUIAvatar)(({ theme }) => ({
  height: '60px',
  width: '60px',
  borderRadius: '30px',

  [theme.breakpoints.down('md')]: {
    height: '50px',
    width: '50px',
    borderRadius: '25px',
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
  gap: '5px',
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

export const NameAndSurnameTypography = styled(Typography)({
  fontWeight: '400',
});

export const AgeTypography = styled(Typography)(({ theme }) => ({
  fontWeight: '400',
  color: theme.palette.common.darkNavy,
  opacity: '0.5',
}));
