import dayjs from 'dayjs';
import { UserFunctionType } from '~/enums/UserFunctionType';
import { Comment } from '../UserPageAndReviews/components/Comment';

export const Home = () => {
  return (
    <Comment
      isOwnComment={true}
      asWho={UserFunctionType.Driver}
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Donec id laoreet nibh. Praesent interdum commodo volutpat. 
      Vivamus nec dui eu elit tincidunt imperdiet vel id lacus. 
      Aliquam ac augue vitae diam egestas porttitor. 
      Sed commodo consequat lectus sit amet posuere. 
      Duis ac tellus justo. Aenean vel justo ac justo placerat convallis et quis erat.
      Praesent sagittis finibus neque sed ornare. Phasellus vitae eros tellus.
      Nunc justo quam, pretium quis sollicitudin eu, lacinia id risus. 
      Nullam mi odio, tempus ut augue eget, venenatis posuere lorem. '
      givenStars={4}
      date={dayjs()}
    />
  );
};
