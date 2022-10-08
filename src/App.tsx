import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer } from '~/components/Footer';
import { Navbar } from '~/components/Navbar';
import { Paths } from '~/enums/Paths';
import { Wrapper, Container, Content, StyledCircularProgress } from './App.style';

const Home = lazy(() => import('~/pages/Home').then((module) => ({ default: module.Home })));
const NotFound = lazy(() =>
  import('~/pages/NotFound').then((module) => ({ default: module.NotFound })),
);
const Error = lazy(() => import('~/pages/Error').then((module) => ({ default: module.Error })));
const Test = lazy(() => import('~/pages/Test').then((module) => ({ default: module.Test })));

const App = () => {
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
                path={Paths.Error}
                element={<Error />}
              />
              <Route
                path={Paths.NotFound}
                element={<NotFound />}
              />
              <Route
                path='/test'
                element={<Test />}
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
