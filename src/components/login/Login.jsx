import styled from "styled-components";
import Input from "../input/Input";
import Button from "../button/Button";
import { useState, useContext } from "react";
import Title from "../title/Title";
import Container from "../container/Container";
import PersonIcon from "@mui/icons-material/person";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { loginUser } from "../../database/Database";

const Form = styled.form`
  width: 350px;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Error = styled.div`
  height: 1rem;
  color: red;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: green;
  margin-top: 1rem;
  font-weight: bold;
`;

function Login() {
  const { loggedUser, login, logout } = useContext(AuthContext);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      validUser(user);
    } else {
      logout();
    }
  };

  const validateForm = () => {
    let valid = true;
    if (!user.username) {
      setUserError("Informe seu usuário!");
      valid = false;
    } else setUserError("");
    if (!user.password) {
      setPasswordError("Informe sua senha!");
      valid = false;
    } else setPasswordError("");
    return valid;
  };

  const validUser = () => {
    const validUser = loginUser(user);
    if (validUser) {
      login(validUser);
      setUser("");
    } else {
      setPasswordError("Usuário ou senha inválido.");
    }
  };

  return (
    <Container>
      {loggedUser ? (
        <>
          <h1>Bem Vindo {loggedUser.name}</h1>
        </>
      ) : (
        <>
          <Form onSubmit={handleSubmit}>
            <Title title="Login de usuário" />
            <Input
              type="text"
              name="username"
              onChange={handleChange}
              value={user.username}
              placeholder="Usuário"
            />
            <Error>{userError && userError}</Error>
            <Input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Senha"
              readOnly={false}
            />
            <Error>{passwordError && passwordError}</Error>
            <Button
              description="Login"
              border="2px solid gray"
              borderRadius="0.5rem"
              textColor="#fff"
              width="8rem"
              height="2.5rem"
              fontSize="1.1rem"
              type="submit"
              marginTop="25px"
            >
              <PersonIcon />
            </Button>
          </Form>
          <p>
            Ainda não tem cadastro?
            <StyledLink to="/register"> Clique aqui.</StyledLink>
          </p>
        </>
      )}
    </Container>
  );
}

export default Login;
