import styled from "styled-components";
import Routes from "./routes";
import AuthProvider from "./provider/AuthProvider";

const AppContainer = styled.div`
  background-color: #ececf0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

function App() {
  return (
    <AuthProvider>
      <AppContainer>
        <Routes />
      </AppContainer>
    </AuthProvider>
  );
}

export default App;
