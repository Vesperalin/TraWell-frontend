import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Sizes } from '~/enums/StyleSettings';
import { StyledPrimaryButton } from './PrimaryButton.style';

interface Props {
  label: string;
  onClick: () => void;
  desktopSize: Sizes;
  mobileSize: Sizes;
  id?: string;
}

export const PrimaryButton = ({ id, label, onClick, desktopSize, mobileSize }: Props) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <StyledPrimaryButton
      id={id}
      variant='contained'
      onClick={onClick}
      size={isSmallScreen ? mobileSize : desktopSize}
    >
      {label}
    </StyledPrimaryButton>
  );
};
