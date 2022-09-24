import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  StyledBox,
  StyledModal,
  StyledHeader,
  ButtonsStyledBox,
  MediumPrimaryButton,
  SmallPrimaryButton,
  MediumSecondaryButton,
  SmallSecondaryButton,
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
              <MediumSecondaryButton
                size='medium'
                variant='outlined'
                onClick={secondaryButtonAction}
              >
                {secondaryButtonText}
              </MediumSecondaryButton>
            )}
            {secondaryButtonText && secondaryButtonAction && (
              <SmallSecondaryButton
                size='small'
                variant='outlined'
                onClick={secondaryButtonAction}
              >
                {secondaryButtonText}
              </SmallSecondaryButton>
            )}
            <MediumPrimaryButton
              size='medium'
              variant='contained'
              onClick={primaryButtonAction}
            >
              {primaryButtonText}
            </MediumPrimaryButton>
            <SmallPrimaryButton
              size='small'
              variant='contained'
              onClick={primaryButtonAction}
            >
              {primaryButtonText}
            </SmallPrimaryButton>
          </ButtonsStyledBox>
        </StyledBox>
      </StyledModal>
    </div>
  );
};

export { CustomModal as Modal };
