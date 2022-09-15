import { User } from '~/components/User';

export const Home = () => {
  return (
    <User
      isAvatarFirstDesktop={true}
      isAvatarFirstMobile={false}
      name='Andrzej'
      imageSource='https://minimaltoolkit.com/images/randomdata/male/1.jpg'
      reviewMean={4.7}
    />
  );
};
