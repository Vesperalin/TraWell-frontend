import { styled } from '@mui/system';
import { MapContainer } from 'react-leaflet';

export const StyledMapContainer = styled(MapContainer, {
  shouldForwardProp: (prop) => prop !== 'heightOfMap',
})<{ heightOfMap: number }>(({ heightOfMap }) => ({
  width: '100%',
  height: heightOfMap + 'px',

  'div.leaflet-bottom:nth-child(4), .leaflet-routing-container': {
    display: 'none',
  },
}));
