import Stack from '@mui/material/Stack';
import { ChangeEvent } from 'react';
import {
  StyledBox,
  StyledLabels,
  TextArea,
  AntSwitch,
  TopSectionWrapper,
  Label,
} from './Description.style';

interface Props {
  value: string;
  setValue(value: string): void;
  label: string;
  checked: boolean;
  setChecked: (newValue: boolean) => void;
}

export const Description = ({ value, setValue, label, checked, setChecked }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value.trim());
  };

  const handleChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <StyledBox>
      <TopSectionWrapper>
        <StyledLabels variant='h4'>{label}</StyledLabels>
        <Stack
          direction='row'
          spacing={1}
          alignItems='center'
        >
          <Label variant='h5'>Off</Label>
          <AntSwitch
            checked={checked}
            onChange={handleChecked}
          />
          <Label variant='h5'>On</Label>
        </Stack>
      </TopSectionWrapper>
      {checked && (
        <TextArea
          placeholder='Add description'
          multiline={true}
          rows={4}
          fullWidth
          value={value}
          onChange={handleChange}
        />
      )}
    </StyledBox>
  );
};
