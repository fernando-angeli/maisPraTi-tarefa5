import Title from "../title/Title";
import Button from "../button/Button";
import { useAuth } from "../../provider/authProvider";
import LogoutIcon from "@mui/icons-material/Logout";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Menu() {
  const { loggedUser, logout } = useAuth();
  return (
    <>
      {loggedUser && (
        <Navbar
          collapseOnSelect
          sticky="top"
          expand="lg"
          className="w-100 mb-2"
          style={{ backgroundColor: "#ECECF0", borderRadius: "0.5rem" }}
        >
          <Container>
            <Navbar.Brand href="/" className="px-3">
              <Title title="MultiApp" margin="0.5rem 0rem" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="w-100 d-flex justify-content-evenly">
                <Nav.Link href="/translator">Translator</Nav.Link>
                <Nav.Link href="/moviesSearch">Movies</Nav.Link>
                <Nav.Link href="/qrCodeGenerator">QR Code</Nav.Link>
                <Nav.Link href="/searchIp">Search IP</Nav.Link>
                <Nav.Link href="/toDoList">ToDo List</Nav.Link>
                <Button
                  description={loggedUser.name}
                  border="1px solid"
                  borderRadius="0.5rem"
                  backgroundColor="transparent"
                  height="2.5rem"
                  fontSize="1rem"
                  onClick={() => logout()}
                  margin="0"
                >
                  <LogoutIcon />
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
}
