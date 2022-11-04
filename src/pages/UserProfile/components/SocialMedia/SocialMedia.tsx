import Typography from '@mui/material/Typography';
import facebookImage from '~/assets/images/facebook.webp';
import instagramImage from '~/assets/images/instagram.webp';
import {
  StyledWrapper,
  StyledSocialMediaWrapper,
  StyledSocialMediaImage,
} from './SocialMedia.style';

interface Props {
  facebookLink: string;
  instagramLink: string;
}

export const SocialMedia = ({ facebookLink, instagramLink }: Props) => {
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
