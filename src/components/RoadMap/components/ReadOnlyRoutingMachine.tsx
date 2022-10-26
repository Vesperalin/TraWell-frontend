import { createControlComponent } from '@react-leaflet/core';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createRoutineMachineLayer = (props: any) => {
  const { coordinates } = props;

  const instance = L.Routing.control({
    waypoints: coordinates,
    show: false,
    routeWhileDragging: false,
    plan: L.Routing.plan(coordinates, {
      addWaypoints: false,
      draggableWaypoints: false,
      createMarker(waypointIndex, waypoint, numberOfWaypoints) {
        if (waypointIndex === 0) {
          return L.marker(waypoint.latLng, {
            draggable: false,
            icon: L.icon({
              iconUrl: '/src/assets/images/start.png',
              iconSize: [35, 35],
            }),
          });
        } else if (waypointIndex === numberOfWaypoints - 1) {
          return L.marker(waypoint.latLng, {
            draggable: false,
            icon: L.icon({
              iconUrl: '/src/assets/images/finish.png',
              iconSize: [35, 35],
            }),
          });
        } else return false;
      },
    }),
    lineOptions: {
      addWaypoints: false,
      styles: [{ color: '#1363DF', opacity: 1, weight: 5 }],
      extendToWaypoints: true,
      missingRouteTolerance: 2,
    },
  });
  return instance;
};

export const ReadOnlyRoutingMachine = createControlComponent(createRoutineMachineLayer);
