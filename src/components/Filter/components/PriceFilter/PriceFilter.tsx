import FormControl from '@mui/material/FormControl';
import { PriceFilterType } from '../../models/FilterType';
import {
  StyledFormLabel,
  StyledTextField,
  StyledBox,
  StyleTextFieldsBox,
} from './PriceFilter.style';

interface Props {
  filter: PriceFilterType;
}

export const PriceFilter = ({ filter }: Props) => {
  const { from, setFrom, to, setTo } = filter;

  const handleFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFrom(event.target.value.trim());
  };

  const handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTo(event.target.value.trim());
  };

  return (
    <StyledBox>
      <FormControl fullWidth>
        <StyledFormLabel>Price:</StyledFormLabel>
        <StyleTextFieldsBox>
          <StyledTextField
            label='From'
            value={from}
            type='number'
            onChange={handleFromChange}
            size='small'
            inputProps={{
              step: 0.01,
              min: 0.0,
            }}
          />
          <StyledTextField
            label='To'
            value={to}
            type='number'
            onChange={handleToChange}
            size='small'
            inputProps={{
              step: 0.01,
              min: 0.0,
            }}
          />
        </StyleTextFieldsBox>
      </FormControl>
    </StyledBox>
  );
};
