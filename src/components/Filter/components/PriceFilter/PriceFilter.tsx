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
        setFrom(event.target.value.trim());
      } else if (newValue.toString().length + 1 === event.target.value.trim().length) {
        if (event.target.value.trim()[event.target.value.trim().length - 1] === '.') {
          setFrom(event.target.value.trim());
        }
      }
    } else if (event.target.value.trim() === '') {
      setFrom(event.target.value.trim());
    } else if (event.target.value.trim() === '.') {
      setFrom('0' + event.target.value.trim());
    }
  };

  const handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        setTo(event.target.value.trim());
      } else if (newValue.toString().length + 1 === event.target.value.trim().length) {
        if (event.target.value.trim()[event.target.value.trim().length - 1] === '.') {
          setTo(event.target.value.trim());
        }
      }
    } else if (event.target.value.trim() === '') {
      setTo(event.target.value.trim());
    } else if (event.target.value.trim() === '.') {
      setTo('0' + event.target.value.trim());
    }
  };

  return (
    <StyledBox>
      <FormControl fullWidth>
        <StyledFormLabel>Price:</StyledFormLabel>
        <StyleTextFieldsBox>
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
        </StyleTextFieldsBox>
      </FormControl>
    </StyledBox>
  );
};
