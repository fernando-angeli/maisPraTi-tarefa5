/* eslint-disable react/prop-types */
import styled from "styled-components";
import Menu from "../menu/Menu";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  width: 90vw;
  background-color: ${(props) => props.backgroundColor || `#fff`};
  box-shadow: 5px 5px 10px gray;
  padding: 2rem;
`;

const ContainerApp = ({ backgroundColor, children }) => {
  return (
    <StyledContainer backgroundColor={backgroundColor}>
      <Menu />
      {children}
    </StyledContainer>
  );
};

export default ContainerApp;
