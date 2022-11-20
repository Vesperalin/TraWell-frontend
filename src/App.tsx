import { useKeycloak } from '@react-keycloak/web';
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { usersClient } from '~/api/clients';
import { Footer } from '~/components/Footer';
import { Loader } from '~/components/Loader';
import { Navbar } from '~/components/Navbar';
import { Paths } from '~/enums/Paths';
import { Role } from '~/enums/Role';
import { Wrapper, Container, Content, LoadingWrapper } from './App.style';
import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() => import('~/pages/Home').then((module) => ({ default: module.Home })));
const SearchedRides = lazy(() =>
  import('~/pages/SearchedRides').then((module) => ({ default: module.SearchedRides })),
);
const UserProfile = lazy(() =>
  import('~/pages/UserProfile').then((module) => ({ default: module.UserProfile })),
);
const OwnRides = lazy(() =>
  import('~/pages/OwnRides').then((module) => ({ default: module.OwnRides })),
);
const SearchedRideForPassenger = lazy(() =>
  import('~/pages/SearchedRideForPassenger').then((module) => ({
    default: module.SearchedRideForPassenger,
  })),
);
const ChooseCreateRideType = lazy(() =>
  import('~/pages/AddRide').then((module) => ({
    default: module.ChooseCreateRideType,
  })),
);
const AddSingularRide = lazy(() =>
  import('~/pages/AddRide').then((module) => ({
    default: module.AddSingularRide,
  })),
);
const AddRecurrentRide = lazy(() =>
  import('~/pages/AddRide').then((module) => ({
    default: module.AddRecurrentRide,
  })),
);
const EditSingularRide = lazy(() =>
  import('~/pages/EditRide').then((module) => ({ default: module.EditSingularRide })),
);
const EditFullSingularRide = lazy(() =>
  import('~/pages/EditRide').then((module) => ({ default: module.FullRideEdit })),
);
const EditFullPartialRide = lazy(() =>
  import('~/pages/EditRide').then((module) => ({ default: module.PartialRideEdit })),
);
const EditRecurrentRide = lazy(() =>
  import('~/pages/EditRide').then((module) => ({ default: module.EditRecurrentRide })),
);
const OwnRideForDriver = lazy(() =>
  import('~/pages/OwnRideForDriver').then((module) => ({ default: module.OwnRideForDriver })),
);
const OwnRecurrentRideForDriver = lazy(() =>
  import('~/pages/OwnRecurrentRideForDriver').then((module) => ({
    default: module.OwnRecurrentRideForDriver,
  })),
);
const OwnRequests = lazy(() =>
  import('~/pages/OwnRequests').then((module) => ({ default: module.OwnRequests })),
);
const RequestsFromUsers = lazy(() =>
  import('~/pages/RequestsFromUsers').then((module) => ({ default: module.RequestsFromUsers })),
);
const AddComment = lazy(() =>
  import('~/pages/AddComment').then((module) => ({ default: module.AddComment })),
);
const History = lazy(() =>
  import('~/pages/History').then((module) => ({ default: module.History })),
);
const UserVehicles = lazy(() =>
  import('~/pages/UserVehicles').then((module) => ({ default: module.UserVehicles })),
);
const NotFound = lazy(() =>
  import('~/pages/NotFound').then((module) => ({ default: module.NotFound })),
);
const Error = lazy(() => import('~/pages/Error').then((module) => ({ default: module.Error })));

const App = () => {
  const { keycloak, initialized } = useKeycloak();

  useEffect(() => {
    if (keycloak && initialized) {
      if (keycloak.authenticated && keycloak.token) {
        const sendRequest = async () => {
          const response = await usersClient.get<unknown>('users/check_user', {
            headers: { Authorization: keycloak.token ? 'Bearer ' + keycloak.token : '' },
          });
          return response.data;
        };

        sendRequest();
      }
    }
  }, [keycloak, initialized]);

  if (!initialized) {
    return (
      <LoadingWrapper>
        <Loader />
      </LoadingWrapper>
    );
  }

  return (
    <Wrapper>
      <Container>
        <Navbar />
        <Content>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path={Paths.Home}
                element={<Home />}
              />
              <Route
                path={Paths.SearchedRides}
                element={<SearchedRides />}
              />
              <Route
                path={Paths.OwnRides}
                element={<PrivateRoute element={<OwnRides />} />}
              />
              <Route
                path={Paths.ChooseRideType}
                element={<PrivateRoute element={<ChooseCreateRideType />} />}
              />
              <Route
                path={Paths.AddSingularRide}
                element={<PrivateRoute element={<AddSingularRide />} />}
              />
              <Route
                path={Paths.AddRecurrentRide}
                element={<PrivateRoute element={<AddRecurrentRide />} />}
              />
              <Route
                path={Paths.EditSingularRide}
                element={<PrivateRoute element={<EditSingularRide />} />}
              />
              <Route
                path={Paths.EditFullSingularRide}
                element={<PrivateRoute element={<EditFullSingularRide />} />}
              />
              <Route
                path={Paths.EditPartialSingularRide}
                element={<PrivateRoute element={<EditFullPartialRide />} />}
              />
              <Route
                path={Paths.EditRecurrentRide}
                element={<PrivateRoute element={<EditRecurrentRide />} />}
              />
              <Route
                path={Paths.OwnRideForDriver}
                element={<PrivateRoute element={<OwnRideForDriver />} />}
              />
              <Route
                path={Paths.OwnHistoricalRideForDriver}
                element={<PrivateRoute element={<OwnRideForDriver />} />}
              />
              <Route
                path={Paths.OwnRecurrentRideForDriver}
                element={<PrivateRoute element={<OwnRecurrentRideForDriver />} />}
              />
              <Route
                path={Paths.OwnHistoricalRecurrentRideForDriver}
                element={<PrivateRoute element={<OwnRecurrentRideForDriver />} />}
              />
              <Route
                path={Paths.MyRequests}
                element={
                  <PrivateRoute
                    element={<OwnRequests />}
                    role={Role.Private}
                  />
                }
              />
              <Route
                path={Paths.PendingRequests}
                element={<PrivateRoute element={<RequestsFromUsers />} />}
              />
              <Route
                path={Paths.SearchedRideForPassenger}
                element={<SearchedRideForPassenger />}
              />
              <Route
                path={Paths.SearchedHistoricalRideForPassenger}
                element={<SearchedRideForPassenger />}
              />
              <Route
                path={Paths.UserProfile}
                element={<UserProfile />}
              />
              <Route
                path={Paths.AddComment}
                element={<PrivateRoute element={<AddComment />} />}
              />
              <Route
                path={Paths.UserVehicles}
                element={
                  <PrivateRoute
                    element={<UserVehicles />}
                    role={Role.Private}
                  />
                }
              />
              <Route
                path={Paths.HistoryRides}
                element={<PrivateRoute element={<History />} />}
              />
              <Route
                path={Paths.Error}
                element={<Error />}
              />
              <Route
                path={Paths.NotFound}
                element={<NotFound />}
              />
            </Routes>
          </Suspense>
        </Content>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export { App };
