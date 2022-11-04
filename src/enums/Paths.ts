export enum Paths {
  Home = '/',
  // eslint-disable-next-line max-len
  SearchedRides = '/searched-rides/:cityFrom/:countyFrom/:stateFrom/:latFrom/:lonFrom/:cityTo/:countyTo/:stateTo/:latTo/:lonTo/:date/:seatsAmount/:page',
  SearchedRideForPassenger = '/searched-ride/:rideId',
  OwnRideForDriver = '/my-ride/:rideId',
  OwnRides = '/own-rides/:page',
  UserProfile = '/profile/:userId',
  ChooseRideType = '/choose-ride-type',
  AddSingularRide = '/add-singular-ride',
  EditSingularRide = '/edit-singular-ride/:rideId',
  EditFullSingularRide = '/edit-full-singular-ride/:rideId',
  EditPartialSingularRide = '/edit-partial-singular-ride/:rideId',
  Error = '/error',
  NotFound = '*',
}
