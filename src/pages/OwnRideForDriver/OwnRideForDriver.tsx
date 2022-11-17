import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Skeleton from '@mui/material/Skeleton';
import { useEffect } from 'react';
import { useParams, useNavigate, Navigate, useLocation } from 'react-router-dom';
import HistoryService from '~/api/services/HistoryService';
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
  const { pathname } = useLocation();
  const { rideId } = useParams();
  const isHistorical = pathname.includes('my-historical') ? true : false;

  const {
    data: currentData,
    isLoading: currentIsLoading,
    refetch: currentRefetch,
    isError: currentIsError,
  } = RidesService.useSingularRideForDriver(rideId ? Number(rideId) : -1, token ? token : '');

  const {
    data: historicalData,
    isLoading: historicalIsLoading,
    refetch: historicalRefetch,
    isError: historicalIsError,
  } = HistoryService.useSingularRideForDriver(rideId ? Number(rideId) : -1, token ? token : '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (token && rideId) {
      if (isHistorical) {
        historicalRefetch();
      } else {
        currentRefetch();
      }
    }
  }, [token, rideId, isHistorical, historicalRefetch, currentRefetch]);

  const handleEdit = () => {
    navigate(`/edit-singular-ride/${rideId}`);
  };

  if ((isHistorical && historicalIsError) || (!isHistorical && currentIsError)) {
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

  let carDescription: string | undefined = undefined;
  let placeFrom = '';
  let placeTo = '';
  let lengthInMinutes = 0;

  if (isHistorical && historicalData) {
    if (historicalData.vehicle) {
      // eslint-disable-next-line max-len
      carDescription = `${historicalData.vehicle.color} ${historicalData.vehicle.make} ${historicalData.vehicle.model}`;
    }
    placeFrom = `${historicalData.city_from.county}, ${historicalData.city_from.state}`;
    placeTo = `${historicalData.city_to.county}, ${historicalData.city_to.state}`;
    lengthInMinutes = historicalData.duration.minutes + historicalData.duration.hours * 60;
  } else if (!isHistorical && currentData) {
    if (currentData.vehicle) {
      // eslint-disable-next-line max-len
      carDescription = `${currentData.vehicle.color} ${currentData.vehicle.make} ${currentData.vehicle.model}`;
    }
    placeFrom = `${currentData.city_from.county}, ${currentData.city_from.state}`;
    placeTo = `${currentData.city_to.county}, ${currentData.city_to.state}`;
    lengthInMinutes = currentData.duration.minutes + currentData.duration.hours * 60;
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
            isLoading={isHistorical ? historicalIsLoading : currentIsLoading}
            date={isHistorical ? historicalData?.start_date : currentData?.start_date}
            isPrivate={isHistorical ? historicalData?.driver.private : currentData?.driver.private}
          />
          <TimeLocationOfRide
            isLoading={isHistorical ? historicalIsLoading : currentIsLoading}
            startDate={isHistorical ? historicalData?.start_date : currentData?.start_date}
            cityFrom={isHistorical ? historicalData?.city_from.name : currentData?.city_from.name}
            placeFrom={placeFrom}
            exactPlaceFrom={isHistorical ? historicalData?.area_from : currentData?.area_from}
            lengthInMinutes={lengthInMinutes}
            cityTo={isHistorical ? historicalData?.city_to.name : currentData?.city_to.name}
            placeTo={placeTo}
            exactPlaceTo={isHistorical ? historicalData?.area_to : currentData?.area_to}
          />
          {carDescription && (
            <Car
              isLoading={isHistorical ? historicalIsLoading : currentIsLoading}
              carDescription={carDescription}
            />
          )}
          {historicalIsLoading || currentIsLoading ? (
            <Skeleton
              variant='rectangular'
              width={150}
              height={60}
            />
          ) : (
            <AdditionalDataWrapper>
              <SeatsText variant='h4'>
                Available seats:{' '}
                <span>
                  {isHistorical ? historicalData?.available_seats : currentData?.available_seats}
                </span>
              </SeatsText>
              <SeatsText variant='h4'>
                Price: <span>{isHistorical ? historicalData?.price : currentData?.price} zł</span>
              </SeatsText>
            </AdditionalDataWrapper>
          )}
        </LeftColumnWrapper>
        <RightColumnWrapper>
          <Passengers
            isLoading={isHistorical ? historicalIsLoading : currentIsLoading}
            passengers={isHistorical ? historicalData?.passengers : currentData?.passengers}
          />
        </RightColumnWrapper>
      </ColumnsWrapper>
      <Description
        isLoading={isHistorical ? historicalIsLoading : currentIsLoading}
        value={isHistorical ? historicalData?.description : currentData?.description}
      />
      <RoadMap
        isLoading={isHistorical ? historicalIsLoading : currentIsLoading}
        startingLat={isHistorical ? historicalData?.city_from.lat : currentData?.city_from.lat}
        startingLon={isHistorical ? historicalData?.city_from.lng : currentData?.city_from.lng}
        endingLat={isHistorical ? historicalData?.city_to.lat : currentData?.city_to.lat}
        endingLon={isHistorical ? historicalData?.city_to.lng : currentData?.city_to.lng}
        coordinates={isHistorical ? historicalData?.coordinates : currentData?.coordinates}
      />
      {!isHistorical && (
        <PrimaryButton
          label='Edit'
          onClick={handleEdit}
          desktopSize={Sizes.Medium}
          mobileSize={Sizes.Small}
        />
      )}
    </Wrapper>
  );
};
