import Typography from '@mui/material/Typography';
import phoneRoad from '~/assets/images/phone_road.webp';
import signs from '~/assets/images/signs.webp';
import trip from '~/assets/images/trip.webp';
import { StyledCarousel, Element, StyledImage, TextWrapper, Text } from './Carousel.style';

interface Item {
  title: string;
  text: string;
  image: JSX.Element;
}

const items: Item[] = [
  {
    title: 'Share costs and travel at the lowest prices',
    text: 'Share your journeys with others and lower your travel costs. \
      No matter where you are going, whether you are a driver or a passenger. \
      TraWell offers great prices for short and long journeys for everyone.',
    image: <StyledImage src={phoneRoad} />,
  },
  {
    title: 'Precise departure and destination places. Find the rides closest to you!',
    text: 'Tired of long walks home from the train station? \
    On TraWell you will find transport directly to your home. \
    Reach even the smallest towns and enjoy fast and comfortable travel.',
    image: <StyledImage src={signs} />,
  },
  {
    title: 'Instantly find the rides you want. Log in, click and go!',
    text: 'Intuitive interface, modern design and search criteria tailored to your needs. \
    With TraWell, you will find the routes you are interested in right away.',
    image: <StyledImage src={trip} />,
  },
];

const CustomCarousel = () => {
  return (
    <StyledCarousel
      animation='slide'
      interval={3000}
      duration={1000}
    >
      {items.map((item, key) => (
        <Element key={key}>
          {item.image}
          <TextWrapper>
            <Typography variant='h3'>{item.title}</Typography>
            <Text variant='h4'>{item.text}</Text>
          </TextWrapper>
        </Element>
      ))}
    </StyledCarousel>
  );
};

export { CustomCarousel as Carousel };
