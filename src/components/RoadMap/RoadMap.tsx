// import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { TileLayer } from 'react-leaflet';
import { EditableRoutingMachine } from './components/EditableRoutingMachine';
import { ReadOnlyRoutingMachine } from './components/ReadOnlyRoutingMachine';
import { StyledMapContainer } from './RoadMap.style';

interface Props {
  startingPoint: [number, number];
  endingPoint: [number, number];
  heightOfMap: number;
  isEditable: boolean;
  setPoints: (points: [number, number][]) => void;
}

export const RoadMap = ({
  startingPoint,
  endingPoint,
  heightOfMap,
  isEditable,
  setPoints,
}: Props) => {
  return (
    <StyledMapContainer
      center={startingPoint}
      zoom={9}
      heightOfMap={heightOfMap}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {isEditable ? (
        <EditableRoutingMachine
          startingPoint={startingPoint}
          endingPoint={endingPoint}
          setPoints={setPoints}
        />
      ) : (
        <ReadOnlyRoutingMachine
          startingPoint={startingPoint}
          endingPoint={endingPoint}
        />
      )}
    </StyledMapContainer>
  );
};
