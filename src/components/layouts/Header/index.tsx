import { LinkButton, Container, Logo } from '@components/base';
import * as S from './Header.style';

export default function Header() {
  return (
    <header>
      <Container>
        <S.BetweenWrapper>
          <h1>
            <S.TitleLink href="/">
              <Logo />
            </S.TitleLink>
          </h1>
          <LinkButton>관리자 페이지로 이동</LinkButton>
        </S.BetweenWrapper>
      </Container>
    </header>
  );
}
