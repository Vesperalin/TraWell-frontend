import { useKeycloak } from '@react-keycloak/web';
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { usersClient } from '~/api/clients';
import { Footer } from '~/components/Footer';
import { Loader } from '~/components/Loader';
import { Navbar } from '~/components/Navbar';
import { Paths } from '~/enums/Paths';
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
const NotFound = lazy(() =>
  import('~/pages/NotFound').then((module) => ({ default: module.NotFound })),
);
const EditSingularRide = lazy(() =>
  import('~/pages/EditRide').then((module) => ({ default: module.EditSingularRide })),
);
const EditFullSingularRide = lazy(() =>
  import('~/pages/EditRide').then((module) => ({ default: module.FullRideEdit })),
);
const Error = lazy(() => import('~/pages/Error').then((module) => ({ default: module.Error })));

const App = () => {
  const { keycloak, initialized } = useKeycloak();

  useEffect(() => {
    if (keycloak && initialized) {
      if (keycloak.authenticated && keycloak.token) {
        const sendRequest = async () => {
          const response = await usersClient.get<unknown>('users/check_user', {
            headers: { Authorization: keycloak.token ? keycloak.token : '' },
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
                path={Paths.EditSingularRide}
                element={<PrivateRoute element={<EditSingularRide />} />}
              />
              <Route
                path={Paths.EditFullSingularRide}
                element={<PrivateRoute element={<EditFullSingularRide />} />}
              />
              <Route
                path={Paths.SearchedRideForPassenger}
                element={<SearchedRideForPassenger />}
              />
              <Route
                path={Paths.UserProfile}
                element={<UserProfile />}
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
