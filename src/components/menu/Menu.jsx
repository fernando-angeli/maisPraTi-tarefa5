import styled from "styled-components";
import Title from "../title/Title";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import LogoutIcon from "@mui/icons-material/Logout";

const MenuContainer = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid;
  margin-bottom: 2rem;
  font-family: Impact, sans-serif;
`;

const ItensMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const Item = styled.li`
  margin-left: 2rem;
`;

const StyledLinkTitle = styled(Link)`
  text-decoration: none;
  list-style: none;
  font-size: 2rem;
  color: #155ec4;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  list-style: none;
  font-size: 1.2rem;
  color: black;
  &:hover {
    color: #155ec4;
    border-top: 1px solid blue;
    padding-top: 0.5rem;
    transition: 100ms ease-out;
  }
`;

export default function Menu() {
  const { loggedUser, logout } = useContext(AuthContext);
  return (
    <MenuContainer>
      <StyledLinkTitle to="/">
        <Title title="MultiApp" />
      </StyledLinkTitle>
      {loggedUser && (
        <ItensMenu>
          <Item>
            <StyledLink to="/translator">Translator</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/moviesSearch">Movies Search</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/qrCodeGenerator">QR Code Generator</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/searchIp">Search IP</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/toDoList">ToDo List</StyledLink>
          </Item>
          <Item>
            <Button
              description={loggedUser.name}
              border="1px solid"
              borderRadius="0.5rem"
              backgroundColor="transparent"
              height="2.5rem"
              fontSize="1rem"
              onClick={() => logout()}
            >
              <LogoutIcon />
            </Button>
          </Item>
        </ItensMenu>
      )}
    </MenuContainer>
  );
}
