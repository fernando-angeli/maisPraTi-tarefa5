/* eslint-disable react/prop-types */
import styled from "styled-components";

const H1 = styled.h1`
  color: #253f58;
  font-family: Impact, sans-serif;
  font-weight: 100;
`;

function Title(props) {
  return (
    <>
      <H1>{props.title}</H1>
    </>
  );
}
export default Title;
