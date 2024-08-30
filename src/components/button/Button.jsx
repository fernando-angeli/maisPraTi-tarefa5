/* eslint-disable react/prop-types */
import styled from "styled-components";

const ContainerButton = styled.button`
  cursor: pointer;
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ButtonIcon = styled.div`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Button(props) {
  return (
    <ContainerButton
      onClick={props.onClick}
      type={props.type}
      style={{
        border: `${props.border}`,
        borderRadius: `${props.borderRadius || `0.3rem`}`,
        color: `${props.textColor || `#155ec4`}`,
        backgroundColor: `${props.backgroundColor || `#155ec4`}`,
        width: `${props.width || `auto`}`,
        height: `${props.height}`,
        fontSize: `${props.fontSize}`,
        marginTop: `${props.marginTop || 0}`,
      }}
      disabled={props.disabled}
    >
      <ButtonContent>
        {props.children && <ButtonIcon>{props.children}</ButtonIcon>}
        {props.description}
      </ButtonContent>
    </ContainerButton>
  );
}
export default Button;
