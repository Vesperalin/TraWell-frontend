import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Skeleton from '@mui/material/Skeleton';
import { useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import RidesService from '~/api/services/RidesService';
import { PrimaryButton } from '~/components/PrimaryButton';
import { Paths } from '~/enums/Paths';
import { Sizes } from '~/enums/StyleSettings';
import { useAuth } from '~/hooks/useAuth';
import { Car } from './components/Car';
import { Description } from './components/Description';
import { Passengers } from './components/Passengers';
import { RoadMap } from './components/RoadMap';
import { TimeLocationOfRide } from './components/TimeLocationOfRide';
import { UpperDataWrapper } from './components/UpperDataWrapper';
import {
  Wrapper,
  BackButton,
  LeftColumnWrapper,
  ColumnsWrapper,
  RightColumnWrapper,
  SeatsText,
  AdditionalDataWrapper,
} from './OwnRideForDriver.style';

export const OwnRideForDriver = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { rideId } = useParams();
  const { data, isLoading, refetch, isError } = RidesService.useSingularRideForDriver(
    rideId ? Number(rideId) : -1,
    token ? token : '',
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (token && rideId) {
      refetch();
    }
  }, [token, rideId, refetch]);

  const handleEdit = () => {
    navigate(`/edit-singular-ride/${rideId}`);
  };

  if (isError) {
    return (
      <Navigate
        to={Paths.Error}
        replace={true}
        state={{
          text: 'Unexpected error occurred.',
        }}
      />
    );
  }

  return (
    <Wrapper>
      <BackButton
        variant='text'
        size='small'
        onClick={() => navigate(-1)}
      >
        <ArrowBackIosIcon fontSize='small' />
        Back
      </BackButton>
      <ColumnsWrapper>
        <LeftColumnWrapper>
          <UpperDataWrapper
            isLoading={isLoading}
            date={data?.start_date}
            isPrivate={data?.driver.private}
          />
          <TimeLocationOfRide
            isLoading={isLoading}
            startDate={data?.start_date}
            cityFrom={data?.city_from.name}
            placeFrom={data ? `${data.city_from.county}, ${data.city_from.state}` : ''}
            exactPlaceFrom={data?.area_from}
            lengthInMinutes={data ? data.duration.minutes + data.duration.hours * 60 : 0}
            cityTo={data?.city_to.name}
            placeTo={data ? `${data.city_to.county}, ${data.city_to.state}` : ''}
            exactPlaceTo={data?.area_to}
          />
          {data?.vehicle !== null && (
            <Car
              isLoading={isLoading}
              carDescription={
                data
                  ? `${data.vehicle.color} ${data.vehicle.make} ${data.vehicle.model}`
                  : undefined
              }
            />
          )}
          {isLoading ? (
            <Skeleton
              variant='rectangular'
              width={150}
              height={60}
            />
          ) : (
            <AdditionalDataWrapper>
              <SeatsText variant='h4'>
                Available seats: <span>{data?.available_seats}</span>
              </SeatsText>
              <SeatsText variant='h4'>
                Price: <span>{data?.price} zł</span>
              </SeatsText>
            </AdditionalDataWrapper>
          )}
        </LeftColumnWrapper>
        <RightColumnWrapper>
          <Passengers
            isLoading={isLoading}
            passengers={data?.passengers}
          />
        </RightColumnWrapper>
      </ColumnsWrapper>
      <Description
        isLoading={isLoading}
        value={data?.description}
      />
      <RoadMap
        isLoading={isLoading}
        startingLat={data?.city_from.lat}
        startingLon={data?.city_from.lng}
        endingLat={data?.city_to.lat}
        endingLon={data?.city_to.lng}
        coordinates={data?.coordinates}
      />
      <PrimaryButton
        label='Edit'
        onClick={handleEdit}
        desktopSize={Sizes.Medium}
        mobileSize={Sizes.Small}
      />
    </Wrapper>
  );
};
