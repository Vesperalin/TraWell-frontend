import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
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

export const StyledLabels = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.dimmedWhite,
  fontWeight: '400',
}));

export const Container = styled(Box)({
  width: '100%',
});

export const TopSectionWrapper = styled(Box)({
  display: 'flex',
  gap: '20px',
});

export const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.dimmedWhite,
}));

export const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    color: theme.palette.common.blue,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.common.blue,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transitionDuration: '200',
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.dimmedWhite,
    boxSizing: 'border-box',
  },
}));
