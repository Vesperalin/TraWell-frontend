import { Box, InputLabel, TextField } from '@mui/material';
import { styled } from '@mui/system';

export const DropdownBox = styled(Box)({
  '& .MuiTextField-root': { width: '100%' },
});

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.common.white,
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& legend': { display: 'none' },
  '& fieldset': {
    top: 0,
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.common.dimmedWhite,
    borderRadius: '8px',
  },
  minWidth: '300px',
}));
