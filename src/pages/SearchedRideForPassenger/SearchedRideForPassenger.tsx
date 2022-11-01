import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Skeleton from '@mui/material/Skeleton';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, Navigate } from 'react-router-dom';
import RidesService from '~/api/services/RidesService';
import { PrimaryButton } from '~/components/PrimaryButton';
import { Paths } from '~/enums/Paths';
import { Sizes } from '~/enums/StyleSettings';
import { AdditionalRideInfo } from './components/AdditionalRideInfo';
import { Car } from './components/Car';
import { Description } from './components/Description';
import { RoadMap } from './components/RoadMap';
import { SelectSeats } from './components/SelectSeats';
import { TimeLocationOfRide } from './components/TimeLocationOfRide';
import { UpperDataWrapper } from './components/UpperDataWrapper';
import { Wrapper, DataWrapper, ButtonWrapper, BackButton } from './SearchedRideForPassenger.style';

export const SearchedRideForPassenger = () => {
  const navigate = useNavigate();
  const { rideId } = useParams();
  const { state } = useLocation();
  const [seatsToBook, setSeatsToBook] = useState<string>('');
  const { data, isLoading, isError } = RidesService.useRideForPassenger(
    rideId ? Number(rideId) : -1,
  );
  const showButton =
    state == null || (state !== null && (state.showButton as boolean)) ? true : false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <UpperDataWrapper
        availableSeats={data?.available_seats}
        isLoading={isLoading}
        date={data?.start_date}
        isPrivate={data?.driver.private}
        showButton={showButton}
      />
      <DataWrapper>
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
        <AdditionalRideInfo
          isLoading={isLoading}
          seats={data?.seats}
          availableSeats={data?.available_seats}
          cost={data ? Number(data.price) : undefined}
          name={data?.driver.first_name}
          imageSource={data?.driver.avatar}
          reviewMean={data ? Number(data.driver.avg_rate) : undefined}
        />
        <ButtonWrapper>
          <SelectSeats
            seatsToBook={seatsToBook}
            setSeatsToBook={setSeatsToBook}
            isLoading={isLoading}
            availableSeats={data?.available_seats}
          />
          {isLoading ? (
            <Skeleton
              width={100}
              height={40}
            />
          ) : (
            <PrimaryButton
              label='Book ride'
              onClick={() => console.log('tu będzie bookowanie przejazdu')}
              desktopSize={Sizes.Medium}
              mobileSize={Sizes.Small}
            />
          )}
        </ButtonWrapper>
      </DataWrapper>
      <Car
        isLoading={isLoading}
        carDescription={
          data ? `${data.vehicle.color} ${data.vehicle.make} ${data.vehicle.model}` : undefined
        }
      />
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
    </Wrapper>
  );
};
