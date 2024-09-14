/* eslint-disable react/prop-types */
import styled from "styled-components";
import Menu from "../menu/Menu";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  position: absolute;
  top: 5.5rem;
  margin-bottom: 1rem;
  border-radius: 0.8rem;
  width: 90vw;
  height: calc(100vh - 7rem);
  overflow: hidden;
  background-color: ${(props) => props.backgroundColor || `#fff`};
  box-shadow: 5px 5px 10px gray;

  @media (max-width: 991px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ContainerApp = ({ backgroundColor, children }) => {
  return (
    <>
      <Menu />
      <StyledContainer backgroundColor={backgroundColor}>
        {children}
      </StyledContainer>
    </>
  );
};

export default ContainerApp;
