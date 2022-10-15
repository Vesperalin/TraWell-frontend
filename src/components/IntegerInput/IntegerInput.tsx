import { Theme, useMediaQuery, useTheme } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { ChangeEvent, useEffect } from 'react';
import { useStyles } from './IntegerInput.style';

interface Props {
  id: string;
  value: string | null;
  setValue: (amount: string | null) => void;
  adornment?: JSX.Element | string;
}

export const IntegerInput = ({ id, value, setValue, adornment }: Props) => {
  const theme = useTheme();
  const { integerInput } = useStyles(theme);
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value.trim());
  };

  useEffect(() => {
    const element = document.getElementById(id);

    if (element !== null) {
      element.addEventListener('keydown', (evt) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((evt as any).which === 8) return;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((evt as any).which < 48 || (evt as any).which > 57) {
          evt.preventDefault();
        }
      });
    }
  }, [id]);

  return (
    <TextField
      id={id}
      type='number'
      value={value}
      onChange={handleChange}
      className={integerInput}
      size={isSmallScreen ? 'small' : 'medium'}
      InputProps={{
        inputMode: 'numeric',
        endAdornment: adornment ? (
          <InputAdornment position='end'>{adornment}</InputAdornment>
        ) : (
          <></>
        ),
        inputProps: { min: 0, max: 100000 },
      }}
    />
  );
};
