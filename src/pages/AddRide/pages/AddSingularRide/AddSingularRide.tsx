import { Dayjs } from 'dayjs';
import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RidesService from '~/api/services/RidesService';
import { AmountOfPeopleInput } from '~/components/AmountOfPeopleInput';
import { AuthorizedElement } from '~/components/AuthorizedElement';
import { ChooseVehicle } from '~/components/ChooseVehicle';
import { DatePicker } from '~/components/DatePicker';
import { Description } from '~/components/Description';
import { DoubleNumberInput } from '~/components/DoubleNumberInput';
import { IntegerInput } from '~/components/IntegerInput';
import { Modal } from '~/components/Modal';
import { PlaceAutocompleteInput } from '~/components/PlaceAutocompleteInput';
import { PrimaryButton } from '~/components/PrimaryButton';
import { RadioGroup } from '~/components/RadioGroup';
import { RoadMap } from '~/components/RoadMap';
import { TextInput } from '~/components/TextInput';
import { TimePicker } from '~/components/TimePicker';
import { Paths } from '~/enums/Paths';
import { Role } from '~/enums/Role';
import { Sizes } from '~/enums/StyleSettings';
import { useAuth } from '~/hooks/useAuth';
import { AutocompletePlace } from '~/models/AutocompletePlace';
import { transformToFullDate } from '~/utils/TransformToFullDate';
import {
  Form,
  Title,
  FormSectionWrapper,
  Label,
  InnerWrapper,
  SectionWrapper,
  DescriptionWrapper,
  ButtonWrapper,
  ErrorMessage,
} from './AddSingularRide.style';

export const AddSingularRide = () => {
  const { hasRole, token } = useAuth();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [placeFrom, setPlaceFrom] = useState<AutocompletePlace | null>(null);
  const [exactPlaceFrom, setExactPlaceFrom] = useState<string>('');
  const [placeTo, setPlaceTo] = useState<AutocompletePlace | null>(null);
  const [exactPlaceTo, setExactPlaceTo] = useState<string>('');
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [startTime, setStartTime] = useState<Dayjs | null>(null);
  const [amountOfPeople, setAmountOfPeople] = useState<string | null>('1');
  const [hours, setHours] = useState<string | null>('');
  const [minutes, setMinutes] = useState<string | null>('');
  const [price, setPrice] = useState<string | null>('');
  const [vehicle, setVehicle] = useState<number | null>(null);
  const [passengerAcceptance, setPassengerAcceptance] = useState<string>('automatic');
  const [description, setDescription] = useState<string>('');
  const [descriptionChecked, setDescriptionChecked] = useState<boolean>(false);
  const [allPoints, setAllPoints] = useState<[number, number][]>([]);
  const [mapChecked, setMapChecked] = useState<boolean>(false);
  const [isPrivateRole, setIsPrivateRole] = useState<boolean>(false);

  useEffect(() => {
    const check = async () => {
      if (await hasRole(Role.Private)) {
        setIsPrivateRole(true);
      }
    };
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (placeFrom !== null && placeTo !== null) {
      const tempPoints: [number, number][] = [];
      tempPoints.push([Number(placeTo.lat), Number(placeTo.lon)]);
      tempPoints.push([Number(placeFrom.lat), Number(placeFrom.lon)]);
      setAllPoints(tempPoints);
    } else {
      setAllPoints([]);
      setMapChecked(false);
    }
  }, [placeFrom, placeTo]);

  const checkIfHasRole = (role: Role) => {
    if (role === Role.Private) {
      return isPrivateRole;
    } else {
      return !isPrivateRole;
    }
  };

  const { refetch, isError } = RidesService.useAddSingularRide(
    token,
    placeFrom,
    placeTo,
    exactPlaceFrom,
    exactPlaceTo,
    startDate && startTime ? transformToFullDate(startDate, startTime) : null,
    price,
    amountOfPeople,
    vehicle,
    hours,
    minutes,
    description,
    allPoints,
    passengerAcceptance,
    checkIfHasRole,
  );

  const submitHandler = () => {
    if (placeFrom === null) {
      setError('You have to choose starting place - "Place from"');
      window.scrollTo(0, 0);
    } else if (placeTo === null) {
      setError('You have to choose destination place - "Place to"');
      window.scrollTo(0, 0);
    } else if (startDate === null) {
      setError('You have to choose start date');
      window.scrollTo(0, 0);
    } else if (startTime === null) {
      setError('You have to choose start time');
      window.scrollTo(0, 0);
    } else if (!startDate.isValid()) {
      setError('You have to choose valid date');
      window.scrollTo(0, 0);
    } else if (!startTime.isValid()) {
      setError('You have to choose valid time');
      window.scrollTo(0, 0);
    } else if (amountOfPeople === null || amountOfPeople.trim() === '') {
      setError('You have to choose amount of people');
      window.scrollTo(0, 0);
    } else if (hours === null || hours.trim() === '') {
      setError('You have to choose hours. If none, give: 0.');
      window.scrollTo(0, 0);
    } else if (minutes === null || minutes.trim() === '') {
      setError('You have to choose minutes. If none, give: 0.');
      window.scrollTo(0, 0);
    } else if (hours === '0' && minutes === '0') {
      setError('You have to choose duration of ride.');
      window.scrollTo(0, 0);
    } else if (Number(minutes) > 59) {
      setError('Minutes can not be greater than 59 minutes.');
      window.scrollTo(0, 0);
    } else if (Number(hours) > 1000) {
      setError('Hours can not be greater than 1000 hours.');
      window.scrollTo(0, 0);
    } else if (price === null || price.trim() === '') {
      setError('You have to choose price per passenger');
      window.scrollTo(0, 0);
    } else if (checkIfHasRole(Role.Private) && vehicle === null) {
      setError('You have to choose vehicle');
      window.scrollTo(0, 0);
    } else if (exactPlaceFrom.length > 100) {
      setError('"Exact place from" is too long. Maximum is 100 signs.');
      window.scrollTo(0, 0);
    } else if (exactPlaceTo.length > 100) {
      setError('"Exact place to" is too long. Maximum is 100 signs.');
      window.scrollTo(0, 0);
    } else {
      refetch().then(() => {
        setOpenModal(true);
      });
    }
  };

  const chooseVehicle: ReactNode = (
    <>
      <Label variant='body2'>Vehicle</Label>
      <ChooseVehicle
        value={vehicle}
        setValue={setVehicle}
      />
    </>
  );

  const acceptance: ReactNode = (
    <>
      <Label variant='body2'>Passenger acceptance</Label>
      <RadioGroup
        id='passenger-acceptance-buttons'
        options={[
          { value: 'automatic', label: 'Automatic' },
          { value: 'manual', label: 'Manual' },
        ]}
        defaultValue='automatic'
        setValue={setPassengerAcceptance}
      />
    </>
  );

  return (
    <Form>
      <Title variant='h3'>Add a ride</Title>
      {error !== '' && <ErrorMessage variant='h4'>{error}</ErrorMessage>}
      <FormSectionWrapper>
        <Label variant='body2'>From</Label>
        <PlaceAutocompleteInput
          id='place-from-autocomplete'
          label='Place from'
          value={placeFrom}
          setValue={setPlaceFrom}
        />
        <TextInput
          id='exact-place-from'
          label='Exact place from (optional)'
          value={exactPlaceFrom}
          setValue={setExactPlaceFrom}
        />
      </FormSectionWrapper>
      <FormSectionWrapper>
        <Label variant='body2'>To</Label>
        <PlaceAutocompleteInput
          id='place-to-autocomplete'
          label='Place to'
          value={placeTo}
          setValue={setPlaceTo}
        />
        <TextInput
          id='exact-place-to'
          label='Exact place to (optional)'
          value={exactPlaceTo}
          setValue={setExactPlaceTo}
        />
      </FormSectionWrapper>
      <SectionWrapper>
        <FormSectionWrapper>
          <Label variant='body2'>Start time</Label>
          <InnerWrapper>
            <DatePicker
              date={startDate}
              setDate={setStartDate}
            />
            <TimePicker
              time={startTime}
              setTime={setStartTime}
            />
          </InnerWrapper>
        </FormSectionWrapper>
        <FormSectionWrapper>
          <Label variant='body2'>Amount of people</Label>
          <AmountOfPeopleInput
            amountOfPeople={amountOfPeople}
            setAmountOfPeople={setAmountOfPeople}
          />
        </FormSectionWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <FormSectionWrapper>
          <Label variant='body2'>Duration</Label>
          <InnerWrapper>
            <IntegerInput
              id='hours'
              value={hours}
              setValue={setHours}
              adornment='h'
            />
            <IntegerInput
              id='minutes'
              value={minutes}
              setValue={setMinutes}
              adornment='min'
            />
          </InnerWrapper>
        </FormSectionWrapper>
        <FormSectionWrapper>
          <Label variant='body2'>Price</Label>
          <DoubleNumberInput
            value={price}
            setValue={setPrice}
          />
        </FormSectionWrapper>
      </SectionWrapper>
      <FormSectionWrapper>
        <AuthorizedElement
          // eslint-disable-next-line react/no-children-prop
          children={chooseVehicle}
          role={Role.Private}
          elementToPutInstead={acceptance}
        />
      </FormSectionWrapper>
      <DescriptionWrapper>
        <Description
          label='Description (optional)'
          value={description}
          setValue={setDescription}
          checked={descriptionChecked}
          setChecked={setDescriptionChecked}
        />
      </DescriptionWrapper>
      <RoadMap
        coordinates={allPoints}
        heightOfMap={500}
        isEditable={true}
        setPoints={setAllPoints}
        label='Road map (optional)'
        checked={mapChecked}
        setChecked={setMapChecked}
      />
      <ButtonWrapper>
        <PrimaryButton
          id='add-singular-ride'
          label='Add ride'
          onClick={submitHandler}
          desktopSize={Sizes.Medium}
          mobileSize={Sizes.Small}
        />
      </ButtonWrapper>
      <Modal
        open={openModal}
        title={isError ? 'Error occurred' : 'Ride added successfully'}
        text={
          isError
            ? 'Unexpected error occurred while adding the ride. Ride was not created!'
            : 'The ride was added successfully. Wait for first passengers to book a place!'
        }
        showButtonForOpeningModal={false}
        handleOpen={() => setOpenModal(true)}
        handleClose={() => navigate(Paths.Home)}
        primaryButtonText='Okay'
        primaryButtonAction={() => navigate(Paths.Home)}
      />
    </Form>
  );
};
