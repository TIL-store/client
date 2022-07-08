import { Container } from '@components/base';
import StyledFooter from './Footer.style';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <address>
          <a
            target="_blank"
            href="https://github.com/TIL-store"
            rel="noreferrer"
          >
            https://github.com/TIL-store
          </a>
        </address>
      </Container>
    </StyledFooter>
  );
}
