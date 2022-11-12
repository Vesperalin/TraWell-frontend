import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Modal from '@mui/material/Modal';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { PrimaryButton } from '~/components/PrimaryButton';
import { Sizes } from '~/enums/StyleSettings';
import { DateFilter } from '../components/DateFilter';
import { EnumFilter } from '../components/EnumFilter';
import { InputFilter } from '../components/InputFilter';
import { PriceFilter } from '../components/PriceFilter';
import { RatingFilter } from '../components/RatingFilter';
import { RatingMeanFilter } from '../components/RatingMeanFilter';
import { TimeFilter } from '../components/TimeFilter';
import { TypeOfFilter } from '../enums/TypeOfFilter';
import {
  FilterType,
  RadioButtonsFilterType,
  DateFilterType,
  TimeFilterType,
  RatingFilterType,
  InputFilterType,
  PriceFilterType,
  RatingMeanFilterType,
} from '../models/FilterType';
import {
  StyledBox,
  FilterWrapper,
  useStyles,
  CloseWrapper,
  ButtonWrapper,
} from './MobileFilter.style';

interface Props {
  filters: FilterType[];
}

export const MobileFilter = ({ filters }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const { modal } = useStyles(theme);

  return (
    <StyledBox>
      <FilterAltIcon
        fontSize='medium'
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        className={modal}
      >
        <FilterWrapper>
          <CloseWrapper>
            <CloseIcon
              onClick={handleClose}
              fontSize='medium'
            />
          </CloseWrapper>
          {filters.map((filter) => {
            if (filter.type === TypeOfFilter.RadioButtonsFilter) {
              return (
                <EnumFilter
                  key={filter.type}
                  filter={filter as RadioButtonsFilterType}
                />
              );
            } else if (filter.type === TypeOfFilter.DateFilter) {
              return (
                <DateFilter
                  key={filter.type}
                  filter={filter as DateFilterType}
                />
              );
            } else if (filter.type === TypeOfFilter.TimeFilter) {
              return (
                <TimeFilter
                  key={filter.type}
                  filter={filter as TimeFilterType}
                />
              );
            } else if (filter.type === TypeOfFilter.RatingFilter) {
              return (
                <RatingFilter
                  key={filter.type}
                  filter={filter as RatingFilterType}
                />
              );
            } else if (filter.type === TypeOfFilter.InputFilter) {
              return (
                <InputFilter
                  key={filter.type}
                  filter={filter as InputFilterType}
                />
              );
            } else if (filter.type === TypeOfFilter.PriceFilter) {
              return (
                <PriceFilter
                  key={filter.type}
                  filter={filter as PriceFilterType}
                />
              );
            } else if (filter.type === TypeOfFilter.RatingMeanFilterType) {
              return (
                <RatingMeanFilter
                  key={filter.type}
                  filter={filter as RatingMeanFilterType}
                />
              );
            }
          })}
          <ButtonWrapper>
            <PrimaryButton
              label='Close'
              onClick={handleClose}
              desktopSize={Sizes.Medium}
              mobileSize={Sizes.Medium}
            />
          </ButtonWrapper>
        </FilterWrapper>
      </Modal>
    </StyledBox>
  );
};
