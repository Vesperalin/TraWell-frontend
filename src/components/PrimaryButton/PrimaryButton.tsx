import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Sizes } from '~/enums/StyleSettings';
import { StyledPrimaryButton } from './PrimaryButton.style';

interface Props {
  label: string;
  onClick: () => void;
  desktopSize: Sizes;
  mobileSize: Sizes;
}

export const PrimaryButton = ({ label, onClick, desktopSize, mobileSize }: Props) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <StyledPrimaryButton
      variant='contained'
      onClick={onClick}
      size={isSmallScreen ? mobileSize : desktopSize}
    >
      {label}
    </StyledPrimaryButton>
  );
};
