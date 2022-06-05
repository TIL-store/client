import { Button, Container, Logo } from '@components/base';
import BetweenWrapper from '@components/layouts/Header/BetweenWrapper.style';
import TitleLink from '@components/layouts/Header/TitleLink.style';

export default function Header() {
  return (
    <header>
      <Container>
        <BetweenWrapper>
          <h1>
            <TitleLink href="/">
              <Logo />
            </TitleLink>
          </h1>
          <Button>관리자 페이지로 이동</Button>
        </BetweenWrapper>
      </Container>
    </header>
  );
}
