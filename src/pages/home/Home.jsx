import Container from "../../components/container/Container";
import { useAuth } from "../../provider/authProvider";

export const Home = () => {
  const { loggedUser } = useAuth();

  return (
    <Container>
      <h1>Bem Vindo {loggedUser?.name || " Faça login"}</h1>
    </Container>
  );
};
