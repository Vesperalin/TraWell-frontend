import Box from '@mui/material/Box';
import { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RidesService from '~/api/services/RidesService';
import { AmountOfPeopleInput } from '~/components/AmountOfPeopleInput';
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

  useEffect(() => {
    if (placeFrom !== null && placeTo !== null) {
      const tempPoints: [number, number][] = [];
      tempPoints.push([Number(placeFrom.lat), Number(placeFrom.lon)]);
      tempPoints.push([Number(placeTo.lat), Number(placeTo.lon)]);
      setAllPoints(tempPoints);
    } else {
      setAllPoints([]);
    }
  }, [placeFrom, placeTo]);

  const { refetch, isError } = RidesService.useAddRide(
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
    hasRole,
  );

  const submitHandler = () => {
    if (placeFrom === null) {
      setError('You have to choose starting place - "Place from"');
    } else if (placeTo === null) {
      setError('You have to choose destination place - "Place to"');
    } else if (startDate === null) {
      setError('You have to choose start date');
    } else if (startTime === null) {
      setError('You have to choose start time');
    } else if (!startDate.isValid()) {
      setError('You have to choose valid date');
    } else if (!startTime.isValid()) {
      setError('You have to choose valid time');
    } else if (amountOfPeople === null || amountOfPeople.trim() === '') {
      setError('You have to choose amount of people');
    } else if (hours === null || hours.trim() === '') {
      setError('You have to choose hours. If none, give: 0');
    } else if (minutes === null || minutes.trim() === '') {
      setError('You have to choose minutes. If none, give: 0');
    } else if (price === null || price.trim() === '') {
      setError('You have to choose price per passenger');
    } else if (hasRole(Role.Private) && vehicle === null) {
      setError('You have to choose vehicle');
    } else {
      refetch().then(() => {
        setOpenModal(true);
      });
    }
  };

  return (
    <Form>
      <Title variant='h3'>Add a ride</Title>
      {error !== '' && <ErrorMessage variant='h4'>{error}</ErrorMessage>}
      <FormSectionWrapper>
        <Label variant='h5'>From</Label>
        <PlaceAutocompleteInput
          label='Place from'
          value={placeFrom}
          setValue={setPlaceFrom}
        />
        <TextInput
          label='Exact place from (optional)'
          value={exactPlaceFrom}
          setValue={setExactPlaceFrom}
        />
      </FormSectionWrapper>
      <FormSectionWrapper>
        <Label variant='h5'>To</Label>
        <PlaceAutocompleteInput
          label='Place to'
          value={placeTo}
          setValue={setPlaceTo}
        />
        <TextInput
          label='Exact place to (optional)'
          value={exactPlaceTo}
          setValue={setExactPlaceTo}
        />
      </FormSectionWrapper>
      <SectionWrapper>
        <FormSectionWrapper>
          <Label variant='h5'>Start time</Label>
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
        <Box>
          <Label variant='h5'>Amount of people</Label>
          <AmountOfPeopleInput
            amountOfPeople={amountOfPeople}
            setAmountOfPeople={setAmountOfPeople}
          />
        </Box>
      </SectionWrapper>
      <SectionWrapper>
        <FormSectionWrapper>
          <Label variant='h5'>Duration</Label>
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
        <Box>
          <Label variant='h5'>Price</Label>
          <DoubleNumberInput
            value={price}
            setValue={setPrice}
          />
        </Box>
      </SectionWrapper>
      <FormSectionWrapper>
        {hasRole(Role.Private) && (
          <>
            <Label variant='h5'>Vehicle</Label>
            <ChooseVehicle
              value={vehicle}
              setValue={setVehicle}
            />
          </>
        )}
        {hasRole(Role.Company) && (
          <>
            <Label variant='h5'>Passenger acceptance</Label>
            <RadioGroup
              options={[
                { value: 'automatic', label: 'Automatic' },
                { value: 'manual', label: 'Manual' },
              ]}
              defaultValue='automatic'
              setValue={setPassengerAcceptance}
            />
          </>
        )}
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
