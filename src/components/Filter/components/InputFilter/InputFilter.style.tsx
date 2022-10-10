import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

export const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  '&.MuiFormLabel-root': {
    color: theme.palette.common.darkNavy,
    fontWeight: '500',
  },
}));

export const StyledFormControl = styled(FormControl)({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
});

// export const StyledTextField = styled(TextField)({
//   margin: '6px 0',
//   width: '100%',
// });
