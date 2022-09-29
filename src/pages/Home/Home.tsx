import Osmnames from '~/api/services/Osmnames';
import { Carousel } from './components/Carousel';

export const Home = () => {
  const { data } = Osmnames.useAutocompletePlaces('lesz');
  console.log(data && data.forEach((element) => console.log(element.display_name)));
  return <Carousel />;
};
