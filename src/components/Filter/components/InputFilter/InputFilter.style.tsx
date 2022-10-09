import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

export const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  '&.MuiFormLabel-root': {
    color: theme.palette.common.darkNavy,
    fontWeight: '500',
  },
}));

export const StyledBox = styled(Box)({
  width: '100%',
});

export const StyledTextField = styled(TextField)({
  margin: '6px 0',
  width: '100%',
});
