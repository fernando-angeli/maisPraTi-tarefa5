import { useState } from "react";
import axios from "axios";
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";
import ContainerApp from "../../components/container/ContainerApp";
import Input from "../../components/input/Input";
import MovieCard from "./MovieCard";
import SearchIcon from "@mui/icons-material/Search";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function MovieSearchEngine() {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState();
  const [query, setQuery] = useState("");
  const token = import.meta.env.VITE_TOKEN_API_TMDB;

  const searchMovies = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie`,
      params: {
        include_adult: "false",
        language: "pt-br",
        page: "1",
        query: `${query}`,
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setMovie(response.data.results);
        setError(
          response.data.results.length === 0
            ? `Nenhum resultado para sua busca.`
            : ""
        );
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  /*
  * REQUEST OMDB API
  const apiKey = "d10e94a6";
  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`
      );
      if (response.data.Response === "False") {
        setError(response.data.Error);
        return;
      }
      setMovie(response.data.Search);

    } catch (error) {
      console.error("Error " + error);
    }
  };
  */

  return (
    <ContainerApp>
      <Title title="Movies" />
      <Input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Informe um filme para pesquisar"
      />
      <ButtonBox>
        <Button
          onClick={searchMovies}
          description="Buscar"
          border="1px solid"
          borderRadius="0.5rem"
          textColor="white"
          width="8rem"
          height="2.5rem"
          fontSize="1.1rem"
        >
          <SearchIcon />
        </Button>
        <Button
          onClick={() => setQuery("")}
          description="Limpar"
          border="1px solid"
          borderRadius="0.5rem"
          textColor="white"
          width="8rem"
          height="2.5rem"
          fontSize="1rem"
          backgroundColor="red"
          margin="0 0 0 0.5rem"
        >
          <FormatClearIcon />
        </Button>
      </ButtonBox>
      <Container>
        <Row>
          {movie &&
            movie.map((m) => (
              <Col
                xs={12}
                sm={8}
                md={8}
                lg={5}
                xl={4}
                xxl={3}
                className="d-flex f-column justify-content-center align-items-center mb-3"
                key={m.id}
              >
                <MovieCard
                  key={m.id}
                  title={m.original_title}
                  date={m.release_date}
                  poster={`https://image.tmdb.org/t/p/original${m.backdrop_path}`}
                />
              </Col>
            ))}
        </Row>
      </Container>
      <div className="error" style={{ color: "red" }}>
        {error}
      </div>
    </ContainerApp>
  );
}

export default MovieSearchEngine;
