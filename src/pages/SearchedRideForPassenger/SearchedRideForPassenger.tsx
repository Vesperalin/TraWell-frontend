import { useParams } from 'react-router-dom';
import RidesService from '~/api/services/RidesService';
import { PrimaryButton } from '~/components/PrimaryButton';
import { Sizes } from '~/enums/StyleSettings';
import { AdditionalRideInfo } from './components/AdditionalRideInfo';
import { Car } from './components/Car';
import { Description } from './components/Description';
import { RoadMap } from './components/RoadMap';
import { TimeLocationOfRide } from './components/TimeLocationOfRide';
import { UpperDataWrapper } from './components/UpperDataWrapper';
import { Wrapper, DataWrapper, ButtonWrapper } from './SearchedRideForPassenger.style';

export const SearchedRideForPassenger = () => {
  const { rideId } = useParams();
  const { data, isLoading } = RidesService.useRideForPassenger(rideId ? Number(rideId) : -1);

  return (
    <Wrapper>
      <UpperDataWrapper
        isLoading={isLoading}
        date={data?.start_date}
        isPrivate={data?.driver.private}
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
          takenSeats={data?.available_seats}
          cost={data ? Number(data.price) : undefined}
          name={data?.driver.first_name}
          imageSource={data?.driver.avatar}
          reviewMean={data ? Number(data.driver.avg_rate) : undefined}
        />
        <ButtonWrapper>
          <PrimaryButton
            label='Book ride'
            onClick={() => console.log('tu będzie bookowanie przejazdu')}
            desktopSize={Sizes.Medium}
            mobileSize={Sizes.Small}
          />
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
        coordinates={data?.coordinates}
      />
    </Wrapper>
  );
};
