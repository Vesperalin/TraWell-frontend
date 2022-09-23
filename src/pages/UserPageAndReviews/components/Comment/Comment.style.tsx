import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const CommentWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.dimmedWhite,
  color: theme.palette.common.darkNavy,
  width: '670px',
  borderRadius: '20px',
  padding: '20px 30px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',

  [theme.breakpoints.down('md')]: {
    width: '570px',
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    gap: '5px',
  },
}));

export const UpperWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const LowerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

export const MediumTrashIcon = styled(DeleteForeverIcon)(({ theme }) => ({
  transition: 'all .2s ease-in-out',
  opacity: '0.6',
  color: theme.palette.common.darkNavy,

  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.05)',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const SmallTrashIcon = styled(DeleteForeverIcon)(({ theme }) => ({
  transition: 'all .2s ease-in-out',
  opacity: '0.6',
  color: theme.palette.common.darkNavy,
  display: 'none',

  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.05)',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

export const MediumGoldenStar = styled(StarIcon)(({ theme }) => ({
  color: theme.palette.common.orange,
  margin: '0 1px',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const SmallGoldenStar = styled(StarIcon)(({ theme }) => ({
  color: theme.palette.common.orange,
  margin: '0 1px',
  display: 'none',

  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

export const MediumGrayStar = styled(StarIcon)(({ theme }) => ({
  margin: '0 1px',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const SmallGrayStar = styled(StarIcon)(({ theme }) => ({
  margin: '0 1px',
  display: 'none',

  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

export const AsWhoTypography = styled(Typography)({
  span: {
    fontWeight: '500',
  },
});

export const Description = styled(Typography)(({ theme }) => ({
  textAlign: 'justify',

  [theme.breakpoints.down('sm')]: {
    lineHeight: '19px',
  },
}));

export const Rating = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const RatingTypography = styled(Typography)({
  fontWeight: '500',
  marginRight: '5px',
});

export const Date = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginTop: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));
