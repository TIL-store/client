import { Button } from '@mui/material';

interface Props {
  children: string;
}

export default function CustomButton({ children }: Props) {
  return <Button color="primary">{children}</Button>;
}
