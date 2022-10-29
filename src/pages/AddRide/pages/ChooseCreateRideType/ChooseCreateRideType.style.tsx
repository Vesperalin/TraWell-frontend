import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  '& button': {
    alignSelf: 'center',
  },
});

export const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.darkNavy,
}));
