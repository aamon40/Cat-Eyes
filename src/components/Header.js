import { images } from "../constants";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const Logo = styled.div`
  img {
    width: 15rem;
  }
`;

const Nav = styled.div`
  display: flex;

  li {
    color: white;
    padding-right: 1rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <img src={images.logo} alt="" />
      </Logo>

      <Nav>
        <li>about</li>
        <li>contact</li>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
