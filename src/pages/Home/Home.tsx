import { Carousel } from './components/Carousel';
import { SearchRideForm } from './components/SearchRideForm';
import { Wrapper } from './Home.style';

export const Home = () => {
  return (
    <Wrapper>
      <SearchRideForm />
      <Carousel />
    </Wrapper>
  );
};
