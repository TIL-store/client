import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

interface Props {
  options: number[];
  label: string;
  onChange: (value: string) => void;
}

export default function CustomSelect({ label, options, onChange }: Props) {
  const [value, setValue] = useState('');

  const handleChange = (e: SelectChangeEvent) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 200 }}>
      <InputLabel id="generation-select-label">{label}</InputLabel>
      <Select
        labelId="generation-select-label"
        id="generation-select"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
