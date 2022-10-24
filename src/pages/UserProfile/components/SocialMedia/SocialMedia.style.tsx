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

export const StyledSocialMediaImage = styled('img')(({ theme }) => ({
  display: 'inline-block',
  height: '35px',
  width: '35px',
  transition: 'all .2s ease-in-out',

  [theme.breakpoints.down('md')]: {
    height: '30px',
    width: '30px',
  },

  '&:hover': {
    transform: 'scale(1.04)',
  },
}));
