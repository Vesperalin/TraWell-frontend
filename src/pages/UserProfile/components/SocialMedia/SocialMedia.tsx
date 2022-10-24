import Typography from '@mui/material/Typography';
import facebookImage from '~/assets/images/facebook.webp';
import instagramImage from '~/assets/images/instagram.webp';
import {
  StyledWrapper,
  StyledSocialMediaWrapper,
  StyledSocialMediaImage,
} from './SocialMedia.style';

export const SocialMedia = () => {
  const facebookLink: string | undefined = 'https://www.facebook.com/';
  const instagramLink: string | undefined = 'https://www.instagram.com/';

  return (
    <StyledWrapper>
      {(facebookLink || instagramLink) && (
        <>
          <Typography variant='h6'>Find me on: </Typography>
          <StyledSocialMediaWrapper>
            {facebookLink && (
              <a href={facebookLink}>
                <StyledSocialMediaImage
                  alt='facebook link'
                  src={facebookImage}
                />
              </a>
            )}
            {instagramLink && (
              <a href={instagramLink}>
                <StyledSocialMediaImage
                  alt='instagram link'
                  src={instagramImage}
                />
              </a>
            )}
          </StyledSocialMediaWrapper>
        </>
      )}
    </StyledWrapper>
  );
};
