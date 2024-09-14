/* eslint-disable react/prop-types */
import styled from "styled-components";

const H1 = styled.h1`
  color: #253f58;
  font-family: Impact, sans-serif;
  font-size: ${(props) => props.fontSize || `1.8rem`};
`;

function Title(props) {
  return (
    <>
      <H1
        style={{
          margin: `${props.margin || "1rem 0"}`,
          fontSize: `${props.fontSize}`,
        }}
      >
        {props.title}
      </H1>
    </>
  );
}
export default Title;
