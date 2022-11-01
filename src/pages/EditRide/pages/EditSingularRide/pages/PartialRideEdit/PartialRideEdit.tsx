/* eslint-disable camelcase */
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import RidesService from '~/api/services/RidesService';
import { AmountOfPeopleInput } from '~/components/AmountOfPeopleInput';
import { ChooseVehicle } from '~/components/ChooseVehicle';
import { Description } from '~/components/Description';
import { Loader } from '~/components/Loader';
import { Modal } from '~/components/Modal';
import { PrimaryButton } from '~/components/PrimaryButton';
import { RadioGroup } from '~/components/RadioGroup';
import { Paths } from '~/enums/Paths';
import { Role } from '~/enums/Role';
import { Sizes } from '~/enums/StyleSettings';
import { useAuth } from '~/hooks/useAuth';
import {
  Form,
  Title,
  Label,
  SectionWrapper,
  DescriptionWrapper,
  ButtonWrapper,
  ErrorMessage,
} from './PartialRideEdit.style';

export const PartialRideEdit = () => {
  const { rideId } = useParams();
  const { hasRole, token } = useAuth();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [amountOfPeople, setAmountOfPeople] = useState<string | null>('1');
  const [vehicle, setVehicle] = useState<number | null>(null);
  const [passengerAcceptance, setPassengerAcceptance] = useState<string>('automatic');
  const [description, setDescription] = useState<string>('');
  const [descriptionChecked, setDescriptionChecked] = useState<boolean>(false);

  const {
    data: rideData,
    refetch: refetchRideData,
    isLoading: isLoadingRideData,
    isError: isErrorRideData,
  } = RidesService.useRideForDriver(rideId ? Number(rideId) : -1, token ? token : '');

  const { refetch: refetchEditData, isError: isErrorEditData } =
    RidesService.useEditPartialSingularRide(
      rideId ? Number(rideId) : -1,
      token,
      amountOfPeople,
      vehicle,
      description,
      passengerAcceptance,
      hasRole,
    );

  useEffect(() => {
    if (token && rideId) {
      refetchRideData();
    }
  }, [refetchRideData, rideId, token]);

  useEffect(() => {
    if (rideData) {
      setAmountOfPeople(rideData.available_seats.toString());
      setVehicle(rideData.vehicle.vehicle_id);
      setPassengerAcceptance(rideData.automatic_confirm ? 'automatic' : 'manual');
      setDescription(rideData.description);
      setDescriptionChecked(rideData.description.length > 0 ? true : false);
    }
  }, [rideData]);

  const submitHandler = () => {
    if (amountOfPeople === null || amountOfPeople.trim() === '') {
      setError('You have to choose amount of people');
    } else if (hasRole(Role.Private) && vehicle === null) {
      setError('You have to choose vehicle');
    } else {
      refetchEditData().then(() => {
        setOpenModal(true);
      });
    }
  };

  if (isLoadingRideData) {
    return <Loader />;
  } else if (isErrorRideData) {
    return (
      <Navigate
        to={Paths.Error}
        replace={true}
        state={{
          text: 'Unexpected error encountered.',
        }}
      />
    );
  } else {
    return (
      <Form>
        <Title variant='h3'>Add a ride</Title>
        {error !== '' && <ErrorMessage variant='h4'>{error}</ErrorMessage>}
        <SectionWrapper>
          <Box>
            <Label variant='h5'>Amount of people</Label>
            <AmountOfPeopleInput
              amountOfPeople={amountOfPeople}
              setAmountOfPeople={setAmountOfPeople}
            />
          </Box>
        </SectionWrapper>
        <SectionWrapper>
          {hasRole(Role.Private) && (
            <Box>
              <Label variant='h5'>Vehicle</Label>
              <ChooseVehicle
                value={vehicle}
                setValue={setVehicle}
              />
            </Box>
          )}
          {hasRole(Role.Company) && (
            <Box>
              <Label variant='h5'>Passenger acceptance</Label>
              <RadioGroup
                options={[
                  { value: 'automatic', label: 'Automatic' },
                  { value: 'manual', label: 'Manual' },
                ]}
                defaultValue='automatic'
                setValue={setPassengerAcceptance}
              />
            </Box>
          )}
        </SectionWrapper>
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
            label='Save changes'
            onClick={submitHandler}
            desktopSize={Sizes.Medium}
            mobileSize={Sizes.Small}
          />
        </ButtonWrapper>
        <Modal
          open={openModal}
          title={isErrorEditData ? 'Error occurred' : 'Ride changed successfully'}
          text={
            isErrorEditData
              ? 'Unexpected error occurred while adding the ride. Ride was not changed!'
              : 'The ride was changed successfully. Wait for first passengers to book a place!'
          }
          showButtonForOpeningModal={false}
          handleOpen={() => setOpenModal(true)}
          handleClose={() => navigate(Paths.Home)}
          primaryButtonText='Okay'
          primaryButtonAction={() => navigate(Paths.Home)}
        />
      </Form>
    );
  }
};
