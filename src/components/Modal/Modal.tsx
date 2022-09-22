import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  StyledBox,
  StyledModal,
  StyledHeader,
  ButtonsStyledBox,
  PrimaryButton,
  SecondaryButton,
} from './Modal.style';

interface Props {
  open: boolean;
  title: string;
  text: string;
  handleOpen: () => void;
  handleClose: () => void;
  primaryButtonText: string;
  primaryButtonAction: () => void;
  secondaryButtonText?: string;
  secondaryButtonAction?: () => void;
}

const CustomModal = ({
  open,
  title,
  text,
  handleOpen,
  handleClose,
  primaryButtonText,
  primaryButtonAction,
  secondaryButtonText,
  secondaryButtonAction,
}: Props) => {
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <StyledModal
        open={open}
        onClose={handleClose}
      >
        <StyledBox>
          <StyledHeader variant='h4'>{title}</StyledHeader>
          <Typography variant='h5'>{text}</Typography>
          <ButtonsStyledBox>
            {secondaryButtonText && secondaryButtonAction && (
              <SecondaryButton
                size='medium'
                variant='outlined'
                onClick={secondaryButtonAction}
                sx={{ display: { xs: 'none', md: 'block' } }}
              >
                {secondaryButtonText}
              </SecondaryButton>
            )}
            {secondaryButtonText && secondaryButtonAction && (
              <SecondaryButton
                size='small'
                variant='outlined'
                onClick={secondaryButtonAction}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {secondaryButtonText}
              </SecondaryButton>
            )}
            <PrimaryButton
              size='medium'
              variant='contained'
              onClick={primaryButtonAction}
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              {primaryButtonText}
            </PrimaryButton>
            <PrimaryButton
              size='small'
              variant='contained'
              onClick={primaryButtonAction}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {primaryButtonText}
            </PrimaryButton>
          </ButtonsStyledBox>
        </StyledBox>
      </StyledModal>
    </div>
  );
};

export { CustomModal as Modal };
