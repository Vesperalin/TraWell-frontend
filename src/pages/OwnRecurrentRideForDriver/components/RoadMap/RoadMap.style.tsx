import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const Label = styled(Typography)({
  opacity: '0.5',
});

export const StyledSkeleton = styled(Skeleton)({
  width: '100%',
});
