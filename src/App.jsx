import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import MovieSearchEngine from "./components/movieSearchEngine/MovieSearchEngine";
import QRCodeGenerator from "./components/qr-code/QrCodeGenerator";
import SearchIp from "./components/searchIp/SearchIp";
import Translator from "./components/translator/Translator";
import styled from "styled-components";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import { AuthProvider } from "./components/contexts/AuthContext";
import ToDoList from "./components/toDoList/ToDoList";

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
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/translator"
              element={
                <ProtectedRoute>
                  <Translator />
                </ProtectedRoute>
              }
            />
            <Route
              path="/moviesSearch"
              element={
                <ProtectedRoute>
                  <MovieSearchEngine />
                </ProtectedRoute>
              }
            />
            <Route
              path="/qrCodeGenerator"
              element={
                <ProtectedRoute>
                  <QRCodeGenerator />
                </ProtectedRoute>
              }
            />
            <Route
              path="/searchIp"
              element={
                <ProtectedRoute>
                  <SearchIp />
                </ProtectedRoute>
              }
            />
            <Route
              path="/toDoList"
              element={
                <ProtectedRoute>
                  <ToDoList />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </AppContainer>
    </AuthProvider>
  );
}

export default App;
