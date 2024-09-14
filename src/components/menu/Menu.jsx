import Title from "../title/Title";
import Button from "../button/Button";
import { useAuth } from "../../provider/authProvider";
import LogoutIcon from "@mui/icons-material/Logout";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const MenuStyled = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: 1;
  font-weight: 500;
  font-size: 1.1rem;

  .nav-link {
    color: #333;
    transition: color 0.3s ease;
    border-bottom: 3px solid transparent;
  }

  .nav-link:hover {
    border-bottom: 3px solid #ffde59; /* Cor de destaque ao passar o mouse */
  }

  .navbar-brand {
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    transition: color 0.3s ease;
  }

  .navbar-brand:hover {
    color: #ffde59;
  }

  @media (max-width: 991px) {
    .nav-link {
      padding: 1rem;
    }
  }
`;

const ContainerButton = styled.div`
  @media (max-width: 991px) {
    margin: 1rem;
  }
`;

export default function Menu() {
  const { loggedUser, logout } = useAuth();
  return (
    <MenuStyled>
      {loggedUser && (
        <Navbar
          collapseOnSelect
          sticky="top"
          expand="lg"
          className="w-100 mb-2"
          style={{
            borderRadius: "0.5rem",
            backgroundColor: "#ececf0",
            height: "5rem",
          }}
        >
          <Container>
            <Navbar.Brand href="/" className="px-3">
              <Title title="MultiApp" margin="0.5rem 0rem" fontSize="2.5rem" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              style={{
                backgroundColor: "#ececf0",
                padding: "1rem",
              }}
            >
              <Nav className="w-100 d-flex justify-content-evenly">
                <Nav.Link href="/translator">Translator</Nav.Link>
                <Nav.Link href="/moviesSearch">Movies</Nav.Link>
                <Nav.Link href="/qrCodeGenerator">QR Code</Nav.Link>
                <Nav.Link href="/searchIp">Search IP</Nav.Link>
                <Nav.Link href="/toDoList">ToDo List</Nav.Link>
                <ContainerButton>
                  <Button
                    description={loggedUser.name}
                    border="1px solid"
                    borderRadius="0.5rem"
                    backgroundColor="transparent"
                    height="2.5rem"
                    fontSize="1.2rem"
                    onClick={() => logout()}
                    margin="0"
                    padding="0rem 1rem"
                  >
                    <LogoutIcon />
                  </Button>
                </ContainerButton>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </MenuStyled>
  );
}
