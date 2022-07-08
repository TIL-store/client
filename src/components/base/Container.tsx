import { Container } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  sx?: { mb: string };
}

export default function CustomContainer({ children, sx }: Props) {
  return <Container sx={sx}>{children}</Container>;
}

CustomContainer.defaultProps = {
  sx: {},
};
