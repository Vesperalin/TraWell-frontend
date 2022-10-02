import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import { Theme, useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ChangeEvent } from 'react';
import { useStyles } from './AmountOfPeopleInput.style';

interface Props {
  amountOfPeople: number;
  setAmountOfPeople: (amount: number) => void;
}

export const AmountOfPeopleInput = ({ amountOfPeople, setAmountOfPeople }: Props) => {
  const theme = useTheme();
  const { input } = useStyles(theme);
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmountOfPeople(Number(event.target.value));
  };

  return (
    <TextField
      type='number'
      value={amountOfPeople}
      onChange={handleAmountChange}
      className={input}
      size={isSmallScreen ? 'small' : 'medium'}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <AccountCircle />
          </InputAdornment>
        ),
      }}
    />
  );
};
