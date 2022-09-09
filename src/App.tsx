import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer } from '~/components/Footer';
import { Navbar } from '~/components/Navbar';
import { Paths } from '~/enums/Paths';
import { Wrapper, Container, Content } from './App.style';

const Home = lazy(() => import('~/pages/Home').then((module) => ({ default: module.Home })));

const App = () => {
  return (
    <Wrapper>
      <Container>
        <Navbar />
        <Content>
          <Routes>
            <Route
              path={Paths.Home}
              element={<Home />}
            />
          </Routes>
        </Content>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export { App };
