import styled from "styled-components";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useState } from "react";
import Title from "../../components/title/Title";
import ContainerLogin from "../../components/container/ContainerLogin";
import PersonIcon from "@mui/icons-material/Person";
import { useAuth } from "../../provider/authProvider.jsx";
import { Link, useNavigate } from "react-router-dom";
import { loginUserDB } from "../../database/Database.jsx";

const Form = styled.form`
  width: 350px;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Error = styled.div`
  color: red;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: green;
  margin-top: 1rem;
  font-weight: bold;
`;

const Login = () => {
  const { setToken, logout, loginUser } = useAuth();
  const navigate = useNavigate();

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
    const validUser = loginUserDB(user);
    if (validUser) {
      loginUser(validUser);
      setToken("Este é um teste de um token.");
      setUser({ username: "", password: "" });
      navigate("/", { replace: true });
    } else {
      setPasswordError("Usuário ou senha inválido.");
    }
  };

  return (
    <ContainerLogin>
      <Form onSubmit={handleSubmit}>
        <Title title="Login de usuário" margin="1rem 0" />
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
          margin="1.5rem"
        >
          <PersonIcon />
        </Button>
        <p>
          Ainda não tem cadastro?
          <StyledLink to="/register"> Clique aqui.</StyledLink>
        </p>
      </Form>
    </ContainerLogin>
  );
};

export default Login;
