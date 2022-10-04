import { Dayjs } from 'dayjs';
import { useState } from 'react';
import { AmountOfPeopleInput } from '~/components/AmountOfPeopleInput';
import { DataPicker } from '~/components/DatePicker';
import { PlaceAutocompleteInput } from '~/components/PlaceAutocompleteInput';
import { PrimaryButton } from '~/components/PrimaryButton';
import { TimePicker } from '~/components/TimePicker';
import { Sizes } from '~/enums/StyleSettings';
import { AutocompletePlace } from '~/models/AutocompletePlace';
import { Wrapper, Title, RowWrapper, Error } from './SearchRideForm.style';

// TODO: style home page

export const SearchRideForm = () => {
  const [placeFrom, setPlaceFrom] = useState<AutocompletePlace | null>(null);
  const [placeTo, setPlaceTo] = useState<AutocompletePlace | null>(null);
  const [date, setDate] = useState<Dayjs | null>(null);
  const [time, setTime] = useState<Dayjs | null>(null);
  const [amountOfPeople, setAmountOfPeople] = useState<string | null>('');
  const [error, setError] = useState<string>('');

  const handleButtonClick = () => {
    if (
      placeFrom !== null &&
      placeTo !== null &&
      date?.isValid() &&
      date != null &&
      time?.isValid() &&
      time !== null &&
      Number(amountOfPeople) > 0
    ) {
      // TODO - action to change view
      setError('');
      console.log(placeFrom, placeTo, amountOfPeople, date, time);
    } else {
      console.log(date?.isValid());
      if (!date?.isValid()) {
        setError('Date is in incorrect format. Please, use correct one.');
      } else if (!time?.isValid()) {
        setError('Time is in incorrect format. Please, use correct one.');
      } else {
        setError('All fields are obligatory. Please fill them');
      }
    }
  };

  return (
    <Wrapper>
      <Title variant='h2'>Find a ride</Title>
      <RowWrapper>
        <PlaceAutocompleteInput
          value={placeFrom}
          setValue={setPlaceFrom}
          label='From'
        />
        <PlaceAutocompleteInput
          value={placeTo}
          setValue={setPlaceTo}
          label='To'
        />
      </RowWrapper>
      <RowWrapper>
        <DataPicker
          date={date}
          setDate={setDate}
        />
        <TimePicker
          time={time}
          setTime={setTime}
        />
        <AmountOfPeopleInput
          amountOfPeople={amountOfPeople}
          setAmountOfPeople={setAmountOfPeople}
        />
      </RowWrapper>
      <PrimaryButton
        label='Find'
        onClick={handleButtonClick}
        desktopSize={Sizes.Large}
        mobileSize={Sizes.Medium}
      />
      {error !== '' && <Error>{error}</Error>}
    </Wrapper>
  );
};
