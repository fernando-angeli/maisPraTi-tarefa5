/* eslint-disable react/prop-types */
import styled from "styled-components";

const Container = styled.div`
  padding: 0.5rem;
  width: 250px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #fff;
  margin: 1rem;
  box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.2);b
`;

const Img = styled.img`
  max-width: 250px;
  width: auto;
  border-radius: 8px;
`;

const Text = styled.div`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: center;
`;

const H2 = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
`;

function MovieCard(props) {
  return (
    <Container>
      <Img src={props.poster} alt="" />
      <Text>
        <H2>{props.title}</H2>
        <H2>{props.date}</H2>
      </Text>
    </Container>
  );
}
export default MovieCard;
