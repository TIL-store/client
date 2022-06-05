import { useState } from 'react';
import { Chip, Container } from '@components/base';
import ChipList from './ChipList.style';
import FilterWrapper from './FilterWrapper.style';

export default function FilterChips() {
  const [selected, setSelected] = useState('전체');
  const teams = [
    { id: 1, name: '전체' },
    { id: 2, name: '동영' },
    { id: 3, name: '기동' },
    { id: 4, name: '달리' },
    { id: 5, name: '동근' },
    { id: 6, name: '나영' },
    { id: 7, name: '요한' },
    { id: 8, name: '찬희' },
    { id: 9, name: '화랑' },
    { id: 10, name: '지은' },
    { id: 11, name: '재호' },
    { id: 12, name: '루카스' },
    { id: 13, name: '오프' },
  ];

  const handleClick = (team: string) => {
    setSelected(team);
    // TODO : filter card 불러오기
  };

  const teamItems = teams.map(({ id, name }) => (
    <li key={id}>
      <Chip
        label={name}
        variant={selected === name ? 'filled' : 'outlined'}
        onClick={() => handleClick(name)}
      />
    </li>
  ));

  return (
    <FilterWrapper>
      <Container>
        <ChipList>{teamItems}</ChipList>
      </Container>
    </FilterWrapper>
  );
}
