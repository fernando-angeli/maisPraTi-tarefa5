import styled from "styled-components";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useState } from "react";
import Title from "../../components/title/Title";
import ContainerApp from "../../components/container/ContainerApp";
import PersonIcon from "@mui/icons-material/person";
import { createUser } from "../../database/Database";
import { defer, useNavigate } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const Form = styled.form`
  width: 350px;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Error = styled.div`
  height: 1rem;
  color: red;
`;

const StyledToast = styled(Toast)`
  .toast-body {
    position: relative;
    background-color: #28a745; /* Cor inicial verde */
    color: white;
    overflow: hidden;
  }

  .toast-body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #155724; /* Cor final verde escuro */
    transition: width 3s ease-in-out; /* Animação de preenchimento */
    z-index: 1;
  }

  .toast-body.active::before {
    width: 0;
  }
`;

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [nameError, setNameError] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      createUser(user);
      setUser({ name: "", username: "", password: "" }); // Limpa os campos
      setShowToast(true); // Exibe o Toast
      setTimeout(() => {
        setShowToast(false); // Esconde o Toast
        navigate("/"); // Redireciona para a página de login
      }, 3000);
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
    <ContainerApp>
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
          margin="1.5rem"
        >
          <PersonIcon />
        </Button>
      </Form>
      <ToastContainer position="top-end" className="p-3">
        <StyledToast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
        >
          <Toast.Body className={showToast ? "active" : ""}>
            Cadastro realizado com sucesso!
          </Toast.Body>
        </StyledToast>
      </ToastContainer>
    </ContainerApp>
  );
};

export default Register;
