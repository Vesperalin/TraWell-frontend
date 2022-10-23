import { createControlComponent } from '@react-leaflet/core';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createRoutineMachineLayer = (props: any) => {
  const { coordinates, setPoints } = props;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const waypoints = coordinates.map((coord: any) => L.latLng(coord[0], coord[1]));

  const instance = L.Routing.control({
    waypoints: waypoints,
    routeWhileDragging: true,
    plan: L.Routing.plan(waypoints, {
      createMarker(waypointIndex, waypoint, numberOfWaypoints) {
        if (waypointIndex === 0) {
          return L.marker(waypoint.latLng, {
            draggable: true,
            icon: L.icon({
              iconUrl: '/src/assets/images/start.png',
              iconSize: [35, 35],
            }),
          });
        } else if (waypointIndex === numberOfWaypoints - 1) {
          return L.marker(waypoint.latLng, {
            draggable: true,
            icon: L.icon({
              iconUrl: '/src/assets/images/finish.png',
              iconSize: [35, 35],
            }),
          });
        } else {
          return L.marker(waypoint.latLng, {
            draggable: true,
            icon: L.icon({
              iconUrl: '/src/assets/images/point.png',
              iconSize: [20, 20],
            }),
          });
        }
      },
      dragStyles: [{ color: '#1363DF', opacity: 0.5, weight: 3 }],
    }),
    lineOptions: {
      styles: [{ color: '#1363DF', opacity: 1, weight: 5 }],
      extendToWaypoints: true,
      missingRouteTolerance: 2,
    },
  }).on('routesfound', function (e) {
    setPoints(
      e.waypoints.map((waypoint: { latLng: { lat: number; lng: number } }) => {
        return [waypoint.latLng.lat, waypoint.latLng.lng];
      }),
    );
  });
  return instance;
};

export const EditableRoutingMachine = createControlComponent(createRoutineMachineLayer);
