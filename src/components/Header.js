import { StyledHeader } from "../styles/header.styled";
import { Container } from "../styles/container.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
            <Logo src='./assets/svg/logo.svg' alt='' />
        </Nav>
        <h1>Geek Source</h1>
      </Container>
    </StyledHeader>
  );
}
