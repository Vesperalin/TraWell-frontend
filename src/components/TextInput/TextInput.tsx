import { Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useStyles } from './TextInput.style';

interface Props {
  label: string;
  value: string;
  setValue(value: string): void;
}

export const TextInput = ({ label, value, setValue }: Props) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const { extraPlaceTextField, focused } = useStyles({ hide: value !== '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      label={label}
      value={value}
      size={isSmallScreen ? 'small' : 'medium'}
      onChange={handleChange}
      InputLabelProps={{
        style: { color: '#a6a6a6' },
        classes: {
          focused: focused,
        },
      }}
      className={extraPlaceTextField}
    />
  );
};
