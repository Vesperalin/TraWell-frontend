export enum Paths {
  Home = '/',
  // eslint-disable-next-line max-len
  SearchedRides = '/searched-rides/:cityFrom/:countyFrom/:stateFrom/:latFrom/:lonFrom/:cityTo/:countyTo/:stateTo/:latTo/:lonTo/:date/:seatsAmount/:page',
  SearchedRideForPassenger = '/searched-ride/:rideId',
  OwnRides = '/own-rides/:page',
  UserProfile = '/profile/:userId',
  Error = '/error',
  NotFound = '*',
}
