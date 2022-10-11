import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { SortElement } from './models/SortElement';
import { StyledSorter } from './Sort.style';

interface Props {
  sortElementKey: string;
  setSortElementKey: (value: string) => void;
  sortElements: SortElement[];
}

export const Sort = ({ sortElementKey, setSortElementKey, sortElements }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSortElementKey(event.target.value);
  };

  return (
    <StyledSorter>
      <FormControl fullWidth>
        <InputLabel
          size='small'
          id='select-label'
        >
          Sort by
        </InputLabel>
        <Select
          size='small'
          labelId='select-label'
          label='Sort by'
          id='simple-select'
          value={sortElementKey}
          onChange={handleChange}
        >
          {sortElements.map((element) => (
            <MenuItem
              key={element.value}
              value={element.value}
            >
              <Typography variant='h6'>{element.label}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledSorter>
  );
};
