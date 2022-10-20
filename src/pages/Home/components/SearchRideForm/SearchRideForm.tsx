import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AmountOfPeopleInput } from '~/components/AmountOfPeopleInput';
import { DatePicker } from '~/components/DatePicker';
import { PlaceAutocompleteInput } from '~/components/PlaceAutocompleteInput';
import { PrimaryButton } from '~/components/PrimaryButton';
import { TimePicker } from '~/components/TimePicker';
import { Sizes } from '~/enums/StyleSettings';
import { AutocompletePlace } from '~/models/AutocompletePlace';
import { transformToFullDate } from '~/utils/TransformToFullDate';
import { Wrapper, Title, RowWrapper, Error, ButtonWrapper } from './SearchRideForm.style';

export const SearchRideForm = () => {
  const navigate = useNavigate();
  const [placeFrom, setPlaceFrom] = useState<AutocompletePlace | null>(null);
  const [placeTo, setPlaceTo] = useState<AutocompletePlace | null>(null);
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [time, setTime] = useState<Dayjs | null>(
    dayjs()
      .hour(dayjs().hour() + 1)
      .minute(0)
      .second(0)
      .millisecond(0),
  );
  const [amountOfPeople, setAmountOfPeople] = useState<string | null>('1');
  const [error, setError] = useState<string>('');

  const handleButtonClick = () => {
    if (
      placeFrom &&
      placeFrom !== null &&
      placeTo !== null &&
      date?.isValid() &&
      date != null &&
      time?.isValid() &&
      time !== null &&
      amountOfPeople !== null &&
      Number(amountOfPeople) > 0
    ) {
      setError('');
      const dateAndTime = transformToFullDate(date, time);
      navigate(
        // eslint-disable-next-line max-len
        `/searched-rides/${placeFrom.name}/${placeFrom.county}/${placeFrom.state}/${placeFrom.lat}/${placeFrom.lon}/${placeTo.name}/${placeTo.county}/${placeTo.state}/${placeTo.lat}/${placeTo.lon}/${dateAndTime}/${amountOfPeople}/1`,
      );
    } else {
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
        <DatePicker
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
      <ButtonWrapper>
        <PrimaryButton
          label='Find'
          onClick={handleButtonClick}
          desktopSize={Sizes.Large}
          mobileSize={Sizes.Medium}
        />
      </ButtonWrapper>
      {error !== '' && <Error variant='h5'>{error}</Error>}
    </Wrapper>
  );
};
