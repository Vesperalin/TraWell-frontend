import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const StyledWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const StyledSocialMediaWrapper = styled(Box)({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
});

export const StyledSocialMediaImage = styled('img')({
  display: 'inline-block',
  height: '40px',
  width: '40px',
});
