import Typography from '@mui/material/Typography';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import facebookImage from '~/assets/images/facebook.webp';
import instagramImage from '~/assets/images/instagram.webp';
import { useAuth } from '~/hooks/useAuth';
import {
  StyledWrapper,
  StyledSocialMediaWrapper,
  StyledSocialMediaImage,
} from './SocialMedia.style';

export const SocialMedia = () => {
  const { token } = useAuth();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const decodedToken = jwt_decode<any>(token ? token : '');
  const facebookLink = decodedToken.facebook ? decodedToken.facebook : '';
  const instagramLink = decodedToken.instagram ? decodedToken.instagram : '';

  return (
    <StyledWrapper>
      {(facebookLink !== '' || instagramLink !== '') && (
        <>
          <Typography variant='h6'>Find me on: </Typography>
          <StyledSocialMediaWrapper>
            {facebookLink && (
              <a
                href={facebookLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <StyledSocialMediaImage
                  alt='facebook link'
                  src={facebookImage}
                />
              </a>
            )}
            {instagramLink && (
              <a
                href={instagramLink}
                target='_blank'
                rel='noopener noreferrer'
              >
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
