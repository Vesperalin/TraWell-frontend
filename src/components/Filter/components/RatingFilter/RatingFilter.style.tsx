import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/system';

export const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  '&.MuiFormLabel-root': {
    color: theme.palette.common.darkNavy,
    fontWeight: '500',
  },
}));
