import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, Navigate } from 'react-router-dom';
import HistoryService from '~/api/services/HistoryService';
import RidesService from '~/api/services/RidesService';
import { Paths } from '~/enums/Paths';
import { AdditionalRideInfo } from './components/AdditionalRideInfo';
import { Car } from './components/Car';
import { Description } from './components/Description';
import { RoadMap } from './components/RoadMap';
import { TimeLocationOfRide } from './components/TimeLocationOfRide';
import { UpperDataWrapper } from './components/UpperDataWrapper';
import { Wrapper, DataWrapper, BackButton } from './SearchedRideForPassenger.style';

export const SearchedRideForPassenger = () => {
  const navigate = useNavigate();
  const { rideId } = useParams();
  const { state, pathname } = useLocation();
  const [showButton, setShowButton] = useState<boolean>(true);
  const [isHistorical, setIsHistorical] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setShowButton(
      state == null || (state !== null && (state.showButton as boolean)) ? true : false,
    );
  }, [state]);

  useEffect(() => {
    setIsHistorical(pathname.includes('searched-historical') ? true : false);
  }, [pathname]);

  const {
    data: currentData,
    isLoading: currentIsLoading,
    refetch: currentRefetch,
    isError: currentIsError,
  } = RidesService.useRideForPassenger(rideId ? Number(rideId) : -1);

  const {
    data: historicalData,
    isLoading: historicalIsLoading,
    refetch: historicalRefetch,
    isError: historicalIsError,
  } = HistoryService.useRideForPassenger(rideId ? Number(rideId) : -1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (rideId) {
      if (isHistorical) {
        historicalRefetch();
      } else if (isHistorical === false) {
        currentRefetch();
      }
    }
  }, [rideId, isHistorical, historicalRefetch, currentRefetch]);

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
  let price: number | undefined = undefined;
  let reviewMean: number | undefined = undefined;

  if (isHistorical && historicalData) {
    if (historicalData.vehicle) {
      // eslint-disable-next-line max-len
      carDescription = `${historicalData.vehicle.color} ${historicalData.vehicle.make} ${historicalData.vehicle.model}`;
    }
    placeFrom = `${historicalData.city_from.county}, ${historicalData.city_from.state}`;
    placeTo = `${historicalData.city_to.county}, ${historicalData.city_to.state}`;
    lengthInMinutes = historicalData.duration.minutes + historicalData.duration.hours * 60;
    price = Number(historicalData.price);
    reviewMean = Number(historicalData.driver.avg_rate);
  } else if (!isHistorical && currentData) {
    if (currentData.vehicle) {
      // eslint-disable-next-line max-len
      carDescription = `${currentData.vehicle.color} ${currentData.vehicle.make} ${currentData.vehicle.model}`;
    }
    placeFrom = `${currentData.city_from.county}, ${currentData.city_from.state}`;
    placeTo = `${currentData.city_to.county}, ${currentData.city_to.state}`;
    lengthInMinutes = currentData.duration.minutes + currentData.duration.hours * 60;
    price = Number(currentData.price);
    reviewMean = Number(currentData.driver.avg_rate);
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
        userId={isHistorical ? historicalData?.driver.user_id : currentData?.driver.user_id}
        availableSeats={
          isHistorical ? historicalData?.available_seats : currentData?.available_seats
        }
        isLoading={isHistorical ? historicalIsLoading : currentIsLoading}
        date={isHistorical ? historicalData?.start_date : currentData?.start_date}
        isPrivate={isHistorical ? historicalData?.driver.private : currentData?.driver.private}
        showButton={showButton}
        rideId={isHistorical ? historicalData?.ride_id : currentData?.ride_id}
      />
      <DataWrapper>
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
        <AdditionalRideInfo
          userId={isHistorical ? historicalData?.driver.user_id : currentData?.driver.user_id}
          isLoading={isHistorical ? historicalIsLoading : currentIsLoading}
          seats={isHistorical ? historicalData?.seats : currentData?.seats}
          availableSeats={
            isHistorical ? historicalData?.available_seats : currentData?.available_seats
          }
          cost={price}
          name={isHistorical ? historicalData?.driver.first_name : currentData?.driver.first_name}
          imageSource={isHistorical ? historicalData?.driver.avatar : currentData?.driver.avatar}
          reviewMean={reviewMean}
        />
      </DataWrapper>
      {carDescription && (
        <Car
          isLoading={isHistorical ? historicalIsLoading : currentIsLoading}
          carDescription={carDescription}
        />
      )}
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
    </Wrapper>
  );
};
