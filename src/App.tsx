import { useKeycloak } from '@react-keycloak/web';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer } from '~/components/Footer';
import { Navbar } from '~/components/Navbar';
import { Paths } from '~/enums/Paths';
import { Wrapper, Container, Content, StyledCircularProgress, LoadingWrapper } from './App.style';
import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() => import('~/pages/Home').then((module) => ({ default: module.Home })));
const SearchedRides = lazy(() =>
  import('~/pages/SearchedRides').then((module) => ({ default: module.SearchedRides })),
);
const MyProfile = lazy(() =>
  import('~/pages/MyProfile').then((module) => ({ default: module.MyProfile })),
);
const OwnRides = lazy(() =>
  import('~/pages/OwnRides').then((module) => ({ default: module.OwnRides })),
);
const NotFound = lazy(() =>
  import('~/pages/NotFound').then((module) => ({ default: module.NotFound })),
);
const Error = lazy(() => import('~/pages/Error').then((module) => ({ default: module.Error })));

const App = () => {
  const { initialized } = useKeycloak();

  if (!initialized) {
    return (
      <LoadingWrapper>
        <StyledCircularProgress />
      </LoadingWrapper>
    );
  }

  return (
    <Wrapper>
      <Container>
        <Navbar />
        <Content>
          <Suspense fallback={<StyledCircularProgress />}>
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
                path={Paths.MyProfile}
                element={<MyProfile />}
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
