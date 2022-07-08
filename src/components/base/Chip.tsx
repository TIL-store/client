import { Chip } from '@mui/material';

interface Props {
  label: string;
  onClick: () => void;
  variant: 'filled' | 'outlined';
}

export default function CustomChip({ label, onClick, variant }: Props) {
  return (
    <Chip
      label={label}
      onClick={onClick}
      variant={variant}
      component="button"
    />
  );
}
