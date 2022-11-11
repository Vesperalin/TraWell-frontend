import StarIcon from '@mui/icons-material/Star';
import { Avatar as MUIAvatar } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)({
  padding: '20px',
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#47b5ff88',
  columnGap: '30px',
  maxWidth: '240px',
  alignSelf: 'flex-start',
});

export const Avatar = styled(MUIAvatar)(({ theme }) => ({
  height: '70px',
  width: '70px',
  borderRadius: '35px',

  [theme.breakpoints.down('md')]: {
    height: '55px',
    width: '55px',
    borderRadius: '28px',
  },
}));

export const AgeTypography = styled(Typography)(({ theme }) => ({
  fontWeight: '400',
  color: theme.palette.common.dimmedWhite,
  opacity: '0.7',
}));

export const NameTypography = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
  color: theme.palette.common.dimmedWhite,
}));

export const ReviewWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: '5px',
  color: theme.palette.common.dimmedWhite,
}));

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
