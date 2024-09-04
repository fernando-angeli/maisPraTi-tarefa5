//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Login from "./components/login/Login";
//import Register from "./components/register/Register";
//import MovieSearchEngine from "./components/movieSearchEngine/MovieSearchEngine";
//import QRCodeGenerator from "./components/qr-code/QrCodeGenerator";
//import SearchIp from "./components/searchIp/SearchIp";
//import Translator from "./components/translator/Translator";
//import ToDoList from "./components/toDoList/ToDoList";
import styled from "styled-components";
import AuthProvider from "./provider/AuthProvider";
import Routes from "./routes";

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
