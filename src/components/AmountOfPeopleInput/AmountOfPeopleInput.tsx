import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import { Theme, useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ChangeEvent, useEffect } from 'react';
import { useStyles } from './AmountOfPeopleInput.style';

interface Props {
  amountOfPeople: string | null;
  setAmountOfPeople: (amount: string | null) => void;
}

export const AmountOfPeopleInput = ({ amountOfPeople, setAmountOfPeople }: Props) => {
  const theme = useTheme();
  const { input } = useStyles(theme);
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    const element = document.querySelector('input[type=\'number\']');

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
  }, []);

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmountOfPeople(event.target.value.trim());
  };

  return (
    <TextField
      type='number'
      value={amountOfPeople}
      onChange={handleAmountChange}
      className={input}
      size={isSmallScreen ? 'small' : 'medium'}
      InputProps={{
        inputMode: 'numeric',
        startAdornment: (
          <InputAdornment position='start'>
            <AccountCircle />
          </InputAdornment>
        ),
      }}
    />
  );
};
