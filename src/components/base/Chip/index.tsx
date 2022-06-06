import { Chip } from '@mui/material';

interface Props {
  label: string;
  onClick: () => void;
}

export default function CustomChip({ label, onClick }: Props) {
  return <Chip label={label} onClick={onClick} />;
}
