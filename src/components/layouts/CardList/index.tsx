import { Card, Container, Pagination } from '@components/base';
import * as S from './CardList.style';

interface Props {
  cards: {
    author: {
      name: string;
      imgSrc: string;
      url: string;
    };
    team: string;
    date: string;
    thumbnail: string;
    title: string;
    description: string;
  }[];
}

export default function CardList({ cards }: Props) {
  return (
    <Container>
      <S.HiddenTitle>TIL 목록</S.HiddenTitle>
      <S.CardList>
        {cards.map(
          ({ author, team, date, thumbnail, title, description }, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <S.CardItem key={index}>
              <Card
                author={author}
                team={team}
                date={date}
                thumbnail={thumbnail}
                title={title}
                description={description}
              />
            </S.CardItem>
          )
        )}
      </S.CardList>
      <S.PaginationWrapper>
        <Pagination count={10} />
      </S.PaginationWrapper>
    </Container>
  );
}
