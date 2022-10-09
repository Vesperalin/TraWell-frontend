import FormControl from '@mui/material/FormControl';
import { InputFilterType } from '../../models/FilterType';
import { StyledFormLabel, StyledTextField, StyledBox } from './InputFilter.style';

interface Props {
  filter: InputFilterType;
}

export const InputFilter = ({ filter }: Props) => {
  const { from, setFrom, to, setTo } = filter;

  const handleFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFrom(event.target.value);
  };

  const handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTo(event.target.value);
  };

  return (
    <StyledBox>
      <FormControl fullWidth>
        <StyledFormLabel>Places:</StyledFormLabel>
        <StyledTextField
          label='From'
          value={from}
          onChange={handleFromChange}
          size='small'
        />
        <StyledTextField
          label='To'
          value={to}
          onChange={handleToChange}
          size='small'
        />
      </FormControl>
    </StyledBox>
  );
};
