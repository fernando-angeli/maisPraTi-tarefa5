import ContainerApp from "../../components/container/ContainerApp";
import { useAuth } from "../../provider/authProvider";
import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #253f58, #486e8c, #9bbac7);
  background-size: 300% 300%;
  animation: ${gradientAnimation} 10s ease infinite;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const UserName = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffde59;
  margin-left: 0.5rem;
`;
export const Home = () => {
  const { loggedUser } = useAuth();

  return (
    <ContainerApp>
      <User>
        Bem Vindo <UserName>{loggedUser?.name || " Faça login"}</UserName>
      </User>
    </ContainerApp>
  );
};
