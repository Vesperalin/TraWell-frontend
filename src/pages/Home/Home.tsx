import dayjs from 'dayjs';
import { Paths } from '~/enums/Paths';
import { Request } from '../RequestsFromUsers/components/Request';

export const Home = () => {
  return (
    <Request
      startDate={dayjs()}
      isCar={false}
      placeFrom='Wadowice'
      exactPlaceFrom='pomnik JP2'
      lengthInMinutes={40}
      placeTo='Radomsko'
      exactPlaceTo='dom sołtysa'
      detailsPath={Paths.Home}
      userName='Krzysztof'
      imageSource='https://minimaltoolkit.com/images/randomdata/male/3.jpg'
      reviewMean={4.3}
    />
  );
};
