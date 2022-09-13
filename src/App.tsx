import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer } from '~/components/Footer';
import { Navbar } from '~/components/Navbar';
import { Paths } from '~/enums/Paths';
import { Wrapper, Container, Content, StyledCircularProgress } from './App.style';

const Home = lazy(() => import('~/pages/Home').then((module) => ({ default: module.Home })));

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
            </Routes>
          </Suspense>
        </Content>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export { App };
