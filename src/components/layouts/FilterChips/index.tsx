import { Chip, Container } from '@components/base';
import ChipList from './FilterChips.style';

interface Props {
  teams: { id: number; name: string }[];
  selectedTeam: string;
  onClickTeam: (team: string) => void;
}

export default function FilterChips({
  teams,
  selectedTeam,
  onClickTeam,
}: Props) {
  return (
    <Container>
      <ChipList>
        {teams.map(({ id, name }) => (
          <li key={id}>
            <Chip
              label={name}
              variant={selectedTeam === name ? 'filled' : 'outlined'}
              onClick={() => onClickTeam(name)}
            />
          </li>
        ))}
      </ChipList>
    </Container>
  );
}
