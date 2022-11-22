import StarIcon from '@mui/icons-material/Star';
import { Avatar as MUIAvatar } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)({
  width: '90%',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '20px',
});

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.darkNavy,
  textAlign: 'center',
}));

export const AvatarWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  columnGap: '10px',
});

export const Avatar = styled(MUIAvatar)(({ theme }) => ({
  height: '60px',
  width: '60px',
  borderRadius: '30px',

  [theme.breakpoints.down('md')]: {
    height: '50px',
    width: '50px',
  },
}));

export const NameWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
});

export const Name = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.darkNavy,
  fontWeight: '600',
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

export const ReviewWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

export const DataWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Avg = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.darkNavy,
  fontWeight: '500',
}));

export const UpperSection = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '10px',
  padding: '20px',

  [theme.breakpoints.down('sm')]: {
    maxWidth: 'auto',
  },
}));

export const LowerSection = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '10px',
  padding: '20px',
  backgroundColor: theme.palette.common.dimmedWhite,
  borderRadius: '10px',

  [theme.breakpoints.down('sm')]: {
    maxWidth: 'auto',
  },
}));

export const Section = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '10px',
});

export const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.darkNavy,
  fontWeight: '500',
}));

export const Value = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.darkNavy,
  fontWeight: '400',
}));

export const ValueWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  columnGap: '15px',
});

export const EditButtonWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const ButtonWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});
