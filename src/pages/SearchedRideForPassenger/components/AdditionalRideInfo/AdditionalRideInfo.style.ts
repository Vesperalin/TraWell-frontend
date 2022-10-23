import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '10x',
  marginTop: '15px',

  [theme.breakpoints.down('md')]: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
}));

export const TextWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '10x',

  [theme.breakpoints.down('md')]: {
    alignItems: 'flex-start',
  },
}));

export const DesktopSkeleton = styled(Skeleton)(({ theme }) => ({
  display: 'block',

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const MobileSkeleton = styled(Skeleton)(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

export const AvatarWrapper = styled(Box)({
  marginTop: '5px',
});

export const Text = styled(Typography)(
  ({ theme }) => `
  overflow-wrap: break-word;
  margin: 2px 0;
  font-weight: 500;
  text-align: right;
  span {
    color: ${theme.palette.common.navy}
  }
`,
);
