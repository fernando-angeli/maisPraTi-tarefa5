/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  width: 80vw;
  background-color: ${(props) => props.backgroundColor || `#fff`};
  box-shadow: 5px 5px 10px gray;
  padding: 2rem;
`;

const Container = ({ backgroundColor, children }) => {
  return (
    <StyledContainer backgroundColor={backgroundColor}>
      {children}
    </StyledContainer>
  );
};

export default Container;
