import { StyledAvatar } from './Avatar.style';

interface Props {
  alternativeText: string;
  src: string;
}

// TODO - change data to data about user

export const Avatar = ({ alternativeText, src }: Props) => {
  return (
    <StyledAvatar
      alt={alternativeText}
      src={src}
    />
  );
};
