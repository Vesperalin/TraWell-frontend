import dayjs from 'dayjs';
import { RideData } from '../RideSearchResults/components/RideData';

export const Home = () => {
  return (
    <RideData
      startDate={dayjs()}
      isCar={false}
      placeFrom='Szczecin'
      exactPlaceFrom='Rynek'
      lengthInMinutes={500}
      placeTo='Radomik'
      exactPlaceTo='Centrum koło restairacji "Tartello"'
      seats={4}
      takenSeats={2}
      cost={45.5}
      isAvatarFirstDesktop={false}
      isAvatarFirstMobile={false}
      name='Andrzej'
      imageSource='https://minimaltoolkit.com/images/randomdata/male/1.jpg'
      reviewMean={4.7}
    />
  );
};
