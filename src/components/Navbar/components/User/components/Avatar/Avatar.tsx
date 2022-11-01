import { StyledAvatar } from './Avatar.style';

interface Props {
  alternativeText: string;
  src: string;
}

export const Avatar = ({ alternativeText, src }: Props) => {
  return (
    <StyledAvatar
      alt={alternativeText}
      src={src}
    />
  );
};
