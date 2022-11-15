import pageNotFound from '~/assets/images/no_reviews.webp';
import { Wrapper, StyledImage, StyledText } from './NoCommentsFound.style';

export const NoCommentsFound = () => {
  return (
    <Wrapper>
      <StyledImage
        alt='not found page'
        src={pageNotFound}
      />
      <StyledText variant='h5'>There are no reviews about the user</StyledText>
    </Wrapper>
  );
};
