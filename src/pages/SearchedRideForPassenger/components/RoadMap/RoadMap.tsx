import { RoadMap as Map } from '~/components/RoadMap';
import { Coordinate } from '~/models/Rides/RideForPassengerResponse';
import { Wrapper, StyledSkeleton } from './RoadMap.style';

interface Props {
  isLoading: boolean;
  coordinates: Coordinate[] | undefined;
}

export const RoadMap = ({ isLoading, coordinates }: Props) => {
  if (isLoading || !coordinates) {
    return (
      <Wrapper>
        <StyledSkeleton
          variant='rectangular'
          height={500}
        />
      </Wrapper>
    );
  } else if (coordinates.length > 0) {
    const points = coordinates.sort((a, b) => Number(b.sequence_no) - Number(a.sequence_no));
    const mapPoints = points.map((coord) => [Number(coord.lat), Number(coord.lng)]);

    return (
      <Map
        startingPoint={[Number(points[0].lat), Number(points[0].lng)]}
        coordinates={mapPoints}
        heightOfMap={500}
        isEditable={false}
      />
    );
  } else {
    return <></>;
  }
};
