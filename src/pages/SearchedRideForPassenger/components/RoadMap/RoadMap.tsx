import { RoadMap as Map } from '~/components/RoadMap';
import { Coordinate } from '~/models/Rides/DetailedRideData';
import { Wrapper, StyledSkeleton } from './RoadMap.style';

interface Props {
  isLoading: boolean;
  startingLat: string | undefined;
  startingLon: string | undefined;
  endingLat: string | undefined;
  endingLon: string | undefined;
  coordinates: Coordinate[] | undefined;
}

export const RoadMap = ({
  isLoading,
  startingLat,
  startingLon,
  endingLat,
  endingLon,
  coordinates,
}: Props) => {
  if (isLoading || !coordinates || !startingLat || !startingLon || !endingLat || !endingLon) {
    return (
      <Wrapper>
        <StyledSkeleton
          variant='rectangular'
          height={500}
        />
      </Wrapper>
    );
  } else {
    const mapPoints = coordinates.map((coord) => [Number(coord.lat), Number(coord.lng)]);
    mapPoints.unshift([Number(startingLat), Number(startingLon)]);
    mapPoints.push([Number(endingLat), Number(endingLon)]);

    return (
      <Map
        coordinates={mapPoints}
        heightOfMap={500}
        isEditable={false}
      />
    );
  }
};
