import Stack from '@mui/material/Stack';
import 'leaflet/dist/leaflet.css';
import { ChangeEvent } from 'react';
import { TileLayer } from 'react-leaflet';
import { EditableRoutingMachine } from './components/EditableRoutingMachine';
import { ReadOnlyRoutingMachine } from './components/ReadOnlyRoutingMachine';
import {
  StyledMapContainer,
  Container,
  TopSectionWrapper,
  Label,
  AntSwitch,
  StyledLabels,
} from './RoadMap.style';

interface Props {
  coordinates: number[][];
  heightOfMap: number;
  isEditable: boolean;
  setPoints?: (points: [number, number][]) => void;
  label?: string;
  checked?: boolean;
  setChecked?: (newValue: boolean) => void;
}

export const RoadMap = ({
  coordinates,
  heightOfMap,
  isEditable,
  setPoints,
  label,
  checked,
  setChecked,
}: Props) => {
  const handleChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked && setChecked(event.target.checked);
  };

  return (
    <Container>
      {isEditable && (
        <TopSectionWrapper>
          <StyledLabels variant='h4'>{label}</StyledLabels>
          <Stack
            direction='row'
            spacing={1}
            alignItems='center'
          >
            <Label variant='h5'>Don&apos;t add</Label>
            <AntSwitch
              id='map-switch-button'
              checked={checked}
              onChange={handleChecked}
            />
            <Label variant='h5'>Add</Label>
          </Stack>
        </TopSectionWrapper>
      )}
      {(checked === undefined || checked === true) && (
        <StyledMapContainer
          center={
            coordinates.length > 0 ? [coordinates[0][0], coordinates[0][1]] : [51.107883, 17.038538]
          }
          zoom={9}
          minZoom={5}
          maxZoom={18}
          heightOfMap={heightOfMap}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {isEditable ? (
            <EditableRoutingMachine
              setPoints={setPoints}
              coordinates={coordinates}
            />
          ) : (
            <ReadOnlyRoutingMachine coordinates={coordinates} />
          )}
        </StyledMapContainer>
      )}
    </Container>
  );
};
