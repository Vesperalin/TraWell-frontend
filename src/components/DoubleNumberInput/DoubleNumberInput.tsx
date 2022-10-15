import { TextField, Theme, useMediaQuery, useTheme } from '@mui/material';
import { ChangeEvent } from 'react';
import { useStyles } from './DoubleNumberInput.style';

interface Props {
  value: string | null;
  setValue: (amount: string | null) => void;
}

export const DoubleNumberInput = ({ value, setValue }: Props) => {
  const theme = useTheme();
  const { input } = useStyles(theme);
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value.trim());

    if (!isNaN(newValue)) {
      if (
        event.target.value.trim()[event.target.value.trim().length - 1] === '.' &&
        event.target.value.trim().split('.').length > 2
      ) {
        //
      } else if (
        event.target.value.trim().split('.')[1] &&
        event.target.value.trim().split('.')[1].length > 2
      ) {
        //
      } else if (newValue.toString().length === event.target.value.trim().length) {
        setValue(event.target.value.trim());
      } else if (newValue.toString().length + 1 === event.target.value.trim().length) {
        if (event.target.value.trim()[event.target.value.trim().length - 1] === '.') {
          setValue(event.target.value.trim());
        }
      }
    } else if (event.target.value.trim() === '') {
      setValue(event.target.value.trim());
    } else if (event.target.value.trim() === '.') {
      setValue('0' + event.target.value.trim());
    }
  };

  return (
    <TextField
      value={value}
      onChange={handleChange}
      className={input}
      size={isSmallScreen ? 'small' : 'medium'}
      InputProps={{
        endAdornment: '$',
      }}
    />
  );
};
