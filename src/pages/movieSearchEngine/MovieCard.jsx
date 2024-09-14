/* eslint-disable react/prop-types */
import styled from "styled-components";
import defaultPoster from "../../assets/img/default.png";

const Container = styled.div`
  padding: 0.5rem;
  min-height: 260px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  background-color: #fff;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Img = styled.img`
  max-width: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const Text = styled.div`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  margin-top: 0.5rem;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

const Date = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  color: #555;
`;

function MovieCard({ poster, title, date }) {
  const noImage = `https://image.tmdb.org/t/p/originalnull`;

  return (
    <Container>
      <Img
        src={poster !== noImage ? poster : defaultPoster}
        alt={`Poster do filme ${title}`}
      />
      <Text>
        <Name>{title}</Name>
        <Date>{date}</Date>
      </Text>
    </Container>
  );
}
export default MovieCard;
