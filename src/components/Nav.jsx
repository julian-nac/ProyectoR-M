import styled from 'styled-components';
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #DCDCDC;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  color: #212529;
  font-size: 1.2rem;
  text-decoration: none;
  margin-right: 1rem;
  &:hover {
    color: #007bff;
  }
`;

const Nav = ({ onSearch }) => {
  return (
    <StyledNav>
      <StyledLink to='home'>Home</StyledLink>
      <StyledLink to='about'>About</StyledLink>
      <SearchBar onSearch={onSearch} />
    </StyledNav>
  );
};

export default Nav;