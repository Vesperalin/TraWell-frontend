import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/system';

export const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.common.blue,
  marginTop: '60px',
  alignSelf: 'center',
}));
