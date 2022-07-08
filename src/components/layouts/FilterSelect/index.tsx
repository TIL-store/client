import { Container, Select } from '@components/base';

interface Props {
  generations: number[];
  onChange: (generation: string) => void;
}

export default function FilterSelect({ generations, onChange }: Props) {
  return (
    <Container sx={{ mb: '24px' }}>
      <Select label="기수" options={generations} onChange={onChange} />
    </Container>
  );
}
