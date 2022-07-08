import { Button } from '@mui/material';

interface Props {
  children: string;
}

export default function CustomButton({ children }: Props) {
  return (
    <Button
      variant="outlined"
      component="a"
      href="/"
      color="primary"
      size="small"
    >
      {children}
    </Button>
  );
}
