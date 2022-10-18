export enum Paths {
  Home = '/',
  // eslint-disable-next-line max-len
  SearchedRides = '/searched-rides/:cityFrom/:countyFrom/:stateFrom/:cityTo/:countyTo/:stateTo/:date/:time/:seatsAmount',
  Error = '/error',
  NotFound = '*',
}
