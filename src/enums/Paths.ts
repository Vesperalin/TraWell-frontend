export enum Paths {
  Home = '/',
  // eslint-disable-next-line max-len
  SearchedRides = '/searched-rides/:cityFrom/:countyFrom/:stateFrom/:countryFrom/:cityTo/:countyTo/:stateTo/:countryTo/:date/:time/:seatsAmount',
  Error = '/error',
  NotFound = '*',
}
