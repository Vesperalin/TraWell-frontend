import dayjs from 'dayjs';
import { useEffect, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import RidesService from '~/api/services/RidesService';
import { AmountOfPeopleInput } from '~/components/AmountOfPeopleInput';
import { AuthorizedElement } from '~/components/AuthorizedElement';
import { ChooseVehicle } from '~/components/ChooseVehicle';
import { Description } from '~/components/Description';
import { DoubleNumberInput } from '~/components/DoubleNumberInput';
import { Modal } from '~/components/Modal';
import { PlaceAutocompleteInput } from '~/components/PlaceAutocompleteInput';
import { PrimaryButton } from '~/components/PrimaryButton';
import { RadioGroup } from '~/components/RadioGroup';
import { Recurrence } from '~/components/Recurrence';
import { TextInput } from '~/components/TextInput';
import { FrequencyType } from '~/enums/FrequencyType';
import { Paths } from '~/enums/Paths';
import { Role } from '~/enums/Role';
import { Sizes } from '~/enums/StyleSettings';
import { useAuth } from '~/hooks/useAuth';
import { AutocompletePlace } from '~/models/AutocompletePlace';
import { Duration } from '~/models/Duration';
import { RecurrenceType } from '~/models/RecurrenceType';
import { transformToFullDate } from '~/utils/TransformToFullDate';
import {
  Form,
  Title,
  FormSectionWrapper,
  Label,
  SectionWrapper,
  DescriptionWrapper,
  ButtonWrapper,
  ErrorMessage,
} from './AddRecurrentRide.style';

const initialState = {
  startDate: dayjs(),
  endDate: dayjs(),
  startTime: dayjs(),
  frequencyType: FrequencyType.Weekly,
  weekDays: [],
  frequenceOccurrences: 1,
  duration: {
    hours: 0,
    minutes: 0,
  } as Duration,
};

const endTime = dayjs().hour(23).minute(59).second(59).millisecond(59);

export const AddRecurrentRide = () => {
  const { hasRole, token } = useAuth();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [placeFrom, setPlaceFrom] = useState<AutocompletePlace | null>(null);
  const [exactPlaceFrom, setExactPlaceFrom] = useState<string>('');
  const [placeTo, setPlaceTo] = useState<AutocompletePlace | null>(null);
  const [exactPlaceTo, setExactPlaceTo] = useState<string>('');
  const [amountOfPeople, setAmountOfPeople] = useState<string | null>('1');
  const [recurrence, setRecurrence] = useState<RecurrenceType>(initialState);
  const [price, setPrice] = useState<string | null>('');
  const [vehicle, setVehicle] = useState<number | null>(null);
  const [passengerAcceptance, setPassengerAcceptance] = useState<string>('automatic');
  const [description, setDescription] = useState<string>('');
  const [descriptionChecked, setDescriptionChecked] = useState<boolean>(false);
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

  const checkIfHasRole = (role: Role) => {
    if (role === Role.Private) {
      return isPrivateRole;
    } else {
      return !isPrivateRole;
    }
  };

  const { refetch, isError } = RidesService.useAddRecurrentRide(
    token,
    placeFrom,
    placeTo,
    exactPlaceFrom,
    exactPlaceTo,
    recurrence.startDate && recurrence.startTime
      ? transformToFullDate(recurrence.startDate, recurrence.startTime)
      : null,
    recurrence.endDate ? transformToFullDate(recurrence.endDate, endTime) : null,
    recurrence.frequencyType,
    recurrence.frequenceOccurrences,
    recurrence.weekDays,
    price,
    amountOfPeople,
    vehicle,
    recurrence.duration.hours,
    recurrence.duration.minutes,
    description,
    passengerAcceptance,
    checkIfHasRole,
  );

  const submitHandler = () => {
    if (placeFrom === null) {
      setError('You have to choose starting place - "Place from"');
    } else if (placeTo === null) {
      setError('You have to choose destination place - "Place to"');
    } else if (exactPlaceFrom.length > 100) {
      setError('"Exact place from" is too long. Maximum is 100 signs.');
    } else if (exactPlaceTo.length > 100) {
      setError('"Exact place to" is too long. Maximum is 100 signs.');
    } else if (amountOfPeople === null || amountOfPeople.trim() === '') {
      setError('You have to choose amount of people');
    } else if (price === null || price.trim() === '') {
      setError('You have to choose price per passenger');
    } else if (checkIfHasRole(Role.Private) && vehicle === null) {
      setError('You have to choose vehicle');
    } else if (recurrence.startDate == null) {
      setError('You have to choose start date');
    } else if (recurrence.endDate == null) {
      setError('You have to choose endDate date');
    } else if (recurrence.startTime == null) {
      setError('You have to choose start time');
    } else if (recurrence.duration.hours === null) {
      setError('You have to choose hours. If none, give: 0');
    } else if (recurrence.duration.minutes === null) {
      setError('You have to choose minutes. If none, give: 0');
    } else {
      refetch().then(() => {
        setOpenModal(true);
      });
    }
  };

  const chooseVehicle: ReactNode = (
    <FormSectionWrapper>
      <Label variant='body2'>Vehicle</Label>
      <ChooseVehicle
        value={vehicle}
        setValue={setVehicle}
      />
    </FormSectionWrapper>
  );

  const acceptance: ReactNode = (
    <FormSectionWrapper>
      <Label variant='body2'>Passenger acceptance</Label>
      <RadioGroup
        options={[
          { value: 'automatic', label: 'Automatic' },
          { value: 'manual', label: 'Manual' },
        ]}
        defaultValue='automatic'
        setValue={setPassengerAcceptance}
      />
    </FormSectionWrapper>
  );

  return (
    <Form>
      <Title variant='h3'>Add a ride</Title>
      {error !== '' && <ErrorMessage variant='h4'>{error}</ErrorMessage>}
      <FormSectionWrapper>
        <Label variant='body2'>From</Label>
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
        <Label variant='body2'>To</Label>
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
          <Label variant='body2'>Amount of people</Label>
          <AmountOfPeopleInput
            amountOfPeople={amountOfPeople}
            setAmountOfPeople={setAmountOfPeople}
          />
        </FormSectionWrapper>
        <FormSectionWrapper>
          <Label variant='body2'>Price</Label>
          <DoubleNumberInput
            value={price}
            setValue={setPrice}
          />
        </FormSectionWrapper>
        <AuthorizedElement
          // eslint-disable-next-line react/no-children-prop
          children={chooseVehicle}
          role={Role.Private}
          elementToPutInstead={acceptance}
        />
      </SectionWrapper>
      <FormSectionWrapper>
        <Recurrence
          recurrence={recurrence}
          onChange={setRecurrence}
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
