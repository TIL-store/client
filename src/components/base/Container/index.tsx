import { Container } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function CustomContainer({ children }: Props) {
  return <Container>{children}</Container>;
}
