import styled from "styled-components";
import Input from "../input/Input";
import Button from "../button/Button";
import { useState } from "react";
import Title from "../title/Title";
import Container from "../container/Container";
import PersonIcon from "@mui/icons-material/person";
import { createUser } from "../../database/database";
import { useNavigate } from "react-router-dom";

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

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [nameError, setNameError] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      createUser(user);
      setUser("");
      navigate("/");
    }
  };

  const validateForm = () => {
    let valid = true;
    if (!user.name) {
      setNameError("Informe seu nome.");
      valid = false;
    } else setNameError("");
    if (!user.username) {
      setUserError("Informe seu username");
      valid = false;
    } else setUserError("");
    if (!user.password) {
      setPasswordError("Informe sua senha!");
      valid = false;
    } else setPasswordError("");
    return valid;
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title title="Registro de usuário" />
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          value={user.name}
          placeholder="Nome"
          height="1rem"
        />
        <Error>{nameError && nameError}</Error>
        <Input
          type="text"
          name="username"
          onChange={handleChange}
          value={user.username}
          placeholder="Username"
          height="1rem"
        />
        <Error>{userError && userError}</Error>
        <Input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Senha"
          height="1rem"
        />
        <Error>{passwordError && passwordError}</Error>
        <Button
          description="Cadastrar"
          border="2px solid gray"
          borderRadius="0.5rem"
          textColor="#fff"
          backgroundColor="green"
          width="9rem"
          height="2.5rem"
          fontSize="1.1rem"
          type="submit"
          marginTop="25px"
        >
          <PersonIcon />
        </Button>
      </Form>
    </Container>
  );
}
