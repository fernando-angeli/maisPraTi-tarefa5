import ContainerApp from "../../components/container/ContainerApp";
import { useAuth } from "../../provider/authProvider";

export const Home = () => {
  const { loggedUser } = useAuth();

  return (
    <ContainerApp>
      <h1>Bem Vindo {loggedUser?.name || " Faça login"}</h1>
    </ContainerApp>
  );
};
