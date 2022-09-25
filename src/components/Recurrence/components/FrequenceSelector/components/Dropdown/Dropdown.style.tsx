import { Box, InputLabel, TextField } from '@mui/material';
import { styled } from '@mui/system';

export const DropdownBox = styled(Box)({
  '& .MuiTextField-root': { width: '25ch' },
});

export const DropdownInput = styled(TextField)({
  '& legend': { display: 'none' },
  '& fieldset': { top: 0 },
});

export const StyledInputLabel = styled(InputLabel)({
  color: '#FFFFFF',
});
