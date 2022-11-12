import FormControl from '@mui/material/FormControl';
import { RatingMeanFilterType } from '../../models/FilterType';
import {
  StyledFormLabel,
  StyledTextField,
  StyledBox,
  StyleTextFieldsBox,
} from './RatingMeanFilter.style';

interface Props {
  filter: RatingMeanFilterType;
}
export const RatingMeanFilter = ({ filter }: Props) => {
  const { from, setFrom, to, setTo } = filter;

  const handleFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value.trim());

    if (
      !isNaN(newValue) &&
      !event.target.value.includes('.') &&
      !event.target.value.includes(',')
    ) {
      setFrom(event.target.value.trim());
    } else if (event.target.value.trim() === '') {
      setFrom(event.target.value.trim());
    }
  };

  const handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value.trim());

    if (
      !isNaN(newValue) &&
      !event.target.value.includes('.') &&
      !event.target.value.includes(',')
    ) {
      setTo(event.target.value.trim());
    } else if (event.target.value.trim() === '') {
      setTo(event.target.value.trim());
    }
  };

  return (
    <StyledBox>
      <FormControl fullWidth>
        <StyledFormLabel>Rating:</StyledFormLabel>
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
