/* eslint-disable camelcase */
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import { ReactNode, useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import RidesService from '~/api/services/RidesService';
import { AmountOfPeopleInput } from '~/components/AmountOfPeopleInput';
import { AuthorizedElement } from '~/components/AuthorizedElement';
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
import { NextRides } from './components/NextRides';
import { UserSearchRideInputData } from './components/UserSearchRideInputData';
import {
  Form,
  Title,
  Label,
  DescriptionWrapper,
  ButtonWrapper,
  ErrorMessage,
  InnerWrapper,
  UpperWrapper,
  RightWrapper,
  StyledSkeleton,
} from './EditRecurrentRide.style';

export const EditRecurrentRide = () => {
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

  const {
    data: rideData,
    refetch: refetchRideData,
    isLoading: isLoadingRideData,
    isError: isErrorRideData,
  } = RidesService.useRecurrentRideForDriver(rideId ? Number(rideId) : -1, token ? token : '');

  const { refetch: refetchEditData, isError: isErrorEditData } = RidesService.useEditRecurrentRide(
    rideId ? Number(rideId) : -1,
    token,
    amountOfPeople,
    vehicle,
    description,
    passengerAcceptance,
    checkIfHasRole,
  );

  useEffect(() => {
    if (token && rideId) {
      refetchRideData();
    }
  }, [refetchRideData, rideId, token]);

  useEffect(() => {
    if (rideData) {
      setAmountOfPeople(rideData.seats.toString());
      setVehicle(rideData.vehicle ? rideData.vehicle.vehicle_id : null);
      setPassengerAcceptance(rideData.automatic_confirm ? 'automatic' : 'manual');
      setDescription(rideData.description);
      setDescriptionChecked(rideData.description.length > 0 ? true : false);
    }
  }, [rideData]);

  const submitHandler = () => {
    if (amountOfPeople === null || amountOfPeople.trim() === '') {
      setError('You have to choose amount of people');
      window.scrollTo(0, 0);
    } else if (checkIfHasRole(Role.Private) && vehicle === null) {
      setError('You have to choose vehicle');
      window.scrollTo(0, 0);
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
  } else if (rideData) {
    const chooseVehicle: ReactNode = (
      <Box>
        <Label variant='body2'>Vehicle</Label>
        <ChooseVehicle
          value={vehicle}
          setValue={setVehicle}
        />
      </Box>
    );

    const acceptance: ReactNode = (
      <Box>
        <Label variant='body2'>Passenger acceptance</Label>
        <RadioGroup
          id='passenger-acceptance-buttons'
          options={[
            { value: 'automatic', label: 'Automatic' },
            { value: 'manual', label: 'Manual' },
          ]}
          defaultValue={rideData.automatic_confirm ? 'automatic' : 'manual'}
          setValue={setPassengerAcceptance}
        />
      </Box>
    );

    return (
      <div>
        {rideData ? (
          <UserSearchRideInputData
            placeFrom={rideData.city_from.name}
            exactPlaceFrom={rideData.area_from}
            placeTo={rideData.city_to.name}
            exactPlaceTo={rideData.area_from}
            startDate={dayjs(rideData.start_date)}
            endDate={dayjs(rideData.end_date)}
          />
        ) : (
          <StyledSkeleton
            variant='rectangular'
            height='50'
          />
        )}
        <Form>
          <Title variant='h3'>Edit a ride</Title>
          {error !== '' && <ErrorMessage variant='h4'>{error}</ErrorMessage>}
          <InnerWrapper>
            <NextRides id={rideId} />
            <RightWrapper>
              <UpperWrapper>
                <Box>
                  <Label variant='h5'>Amount of people</Label>
                  <AmountOfPeopleInput
                    amountOfPeople={amountOfPeople}
                    setAmountOfPeople={setAmountOfPeople}
                  />
                </Box>
                <AuthorizedElement
                  // eslint-disable-next-line react/no-children-prop
                  children={chooseVehicle}
                  role={Role.Private}
                  elementToPutInstead={acceptance}
                />
              </UpperWrapper>
              <DescriptionWrapper>
                <Description
                  label='Description (optional)'
                  value={description}
                  setValue={setDescription}
                  checked={descriptionChecked}
                  setChecked={setDescriptionChecked}
                />
              </DescriptionWrapper>
            </RightWrapper>
          </InnerWrapper>
          <ButtonWrapper>
            <PrimaryButton
              id='save-changes'
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
      </div>
    );
  } else {
    return <></>;
  }
};
