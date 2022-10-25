import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  '& button': {
    alignSelf: 'center',
  },
});
