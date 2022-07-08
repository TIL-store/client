import Header from '@components/layouts/Header';
import CardList from '@components/layouts/CardList';
import Footer from '@components/layouts/Footer';
import PageContainer from '@components/layouts/PageContainer';
import FilterChips from '@components/layouts/FilterChips';
import { useState } from 'react';
import FilterSelect from '@components/layouts/FilterSelect';

const teams = [
  { id: 1, name: '동영' },
  { id: 2, name: '기동' },
  { id: 3, name: '달리' },
  { id: 4, name: '동근' },
  { id: 5, name: '나영' },
  { id: 6, name: '요한' },
  { id: 7, name: '찬희' },
  { id: 8, name: '화랑' },
  { id: 9, name: '지은' },
  { id: 10, name: '재호' },
  { id: 11, name: '루카스' },
  { id: 12, name: '오프' },
];

const generations = [1, 2];

const tils = [
  {
    author: {
      name: 'rekong',
      imgSrc: '',
    },
    team: '동영',
    date: '2022-04-27',
    thumbnail: 'image',
    title: '글의 제목 입니다.',
    description:
      '간단 요약입니다 간단 요약입니다 간단 요약입니다 간단 요약입니다 간단 요약입니다 간단 요약입니다간단 요약입니다 간단 요약입니다 간단 요약입니다간단 요약입니다 간단 요약입니다 간단 요약입니다간단 요약입니다 간단 요약입니다 간단 요약입니다',
  },
  {
    author: {
      name: 'rekong',
      imgSrc: '',
    },
    team: '동영',
    date: '2022-04-27',
    thumbnail: 'image',
    title: '글의 제목 입니다.',
    description:
      '간단 요약입니다 간단 요약입니다 간단 요약입니다 간단 요약입니다 간단 요약입니다 간단 요약입니다간단 요약입니다 간단 요약입니다 간단 요약입니다간단 요약입니다 간단 요약입니다 간단 요약입니다간단 요약입니다 간단 요약입니다 간단 요약입니다',
  },
  {
    author: {
      name: 'rekong',
      imgSrc: '',
    },
    team: '동영',
    date: '2022-04-27',
    thumbnail: 'image',
    title: '글의 제목 입니다.',
    description:
      '간단 요약입니다 간단 요약입니다 간단 요약입니다 간단 요약입니다 간단 요약입니다 간단 요약입니다간단 요약입니다 간단 요약입니다 간단 요약입니다간단 요약입니다 간단 요약입니다 간단 요약입니다간단 요약입니다 간단 요약입니다 간단 요약입니다',
  },
  {
    author: {
      name: 'rekong',
      imgSrc: '',
    },
    team: '동영',
    date: '2022-04-27',
    thumbnail: 'image',
    title: '글의 제목 입니다.',
    description:
      '간단 요약입니다 간단 요약입니다 간단 요약입니다 간단 요약입니다 간단 요약입니다 간단 요약입니다간단 요약입니다 간단 요약입니다 간단 요약입니다간단 요약입니다 간단 요약입니다 간단 요약입니다간단 요약입니다 간단 요약입니다 간단 요약입니다',
  },
  {
    author: {
      name: 'rekong',
      imgSrc: '',
    },
    team: '동영',
    date: '2022-04-27',
    thumbnail: 'image',
    title: '글의 제목 입니다.',
    description:
      '간단 요약입니다 간단 요약입니다 간단 요약입니다 간단 요약입니다 간단 요약입니다 간단 요약입니다간단 요약입니다 간단 요약입니다 간단 요약입니다간단 요약입니다 간단 요약입니다 간단 요약입니다간단 요약입니다 간단 요약입니다 간단 요약입니다',
  },
  {
    author: {
      name: 'rekong',
      imgSrc: '',
    },
    team: '동영',
    date: '2022-04-27',
    thumbnail: 'image',
    title: '글의 제목 입니다.',
    description:
      '간단 요약입니다 간단 요약입니다 간단 요약입니다 간단 요약입니다 간단 요약입니다 간단 요약입니다간단 요약입니다 간단 요약입니다 간단 요약입니다간단 요약입니다 간단 요약입니다 간단 요약입니다간단 요약입니다 간단 요약입니다 간단 요약입니다',
  },
];

export default function MainPage() {
  const [selectedTeam, setSelectedTeam] = useState(teams[0].name);

  const handleClickTeam = (name: string) => {
    setSelectedTeam(name);
    // TODO : 팀별 TIL card 불러오기
  };

  const handleChangeGeneration = (generation: string) => {
    console.log('Change', generation);
    // TODO : 기수별 TIL card 불러오기
  };

  return (
    <PageContainer>
      <Header />
      <FilterChips
        teams={teams}
        selectedTeam={selectedTeam}
        onClickTeam={handleClickTeam}
      />
      <FilterSelect
        generations={generations}
        onChange={handleChangeGeneration}
      />
      <main>
        <CardList cards={tils} />
      </main>

      <Footer />
    </PageContainer>
  );
}
