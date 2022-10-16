import { useState } from 'react';
import { ChooseVehicle } from '~/components/ChooseVehicle';
import { Carousel } from './components/Carousel';
import { SearchRideForm } from './components/SearchRideForm';
import { Wrapper } from './Home.style';

export const Home = () => {
  const [id, setId] = useState<number | null>(null);

  console.log(id);

  return (
    <Wrapper>
      <SearchRideForm />
      <ChooseVehicle
        value={id}
        setValue={setId}
      />
      <Carousel />
    </Wrapper>
  );
};
