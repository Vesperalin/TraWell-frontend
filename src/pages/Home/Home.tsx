import { useState } from 'react';
import { DoubleNumberInput } from '~/components/DoubleNumberInput';
import { Carousel } from './components/Carousel';
import { SearchRideForm } from './components/SearchRideForm';
import { Wrapper } from './Home.style';

export const Home = () => {
  const [value, setValue] = useState<string | null>('');
  return (
    <Wrapper>
      <SearchRideForm />
      <DoubleNumberInput
        value={value}
        setValue={setValue}
      />
      <Carousel />
    </Wrapper>
  );
};
