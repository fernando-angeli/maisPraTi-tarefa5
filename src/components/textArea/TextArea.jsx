/* eslint-disable react/prop-types */
import styled from "styled-components";

const TextAreaStyled = styled.textarea`
  overflow: auto;
  resize: none;
  height: ${(props) => (props.height ? props.height : `10rem`)};
  width: calc(80% - 2rem);
  padding: ${(props) => (props.padding ? props.padding : `1rem`)};

  @media (min-width: 992px) {
    width: ${(props) => (props.width ? props.width : `80%`)};
  }
  @media (max-width: 991px) {
    width: 100%;
    height: ${(props) => (props.height ? props.height : `10rem`)};
    padding: 0.5rem;
  }
`;

export default function TextArea(props) {
  return (
    <TextAreaStyled
      style={{
        backgroundColor: `${props.backgroundColor || `transparent`}`,
        border: `${props.border || `1px solid gray`}`,
        borderRadius: `0.3rem`,
        margin: `${props.margin}`,
        textDecoration: `${props.textDecoration || `none`}`,
        fontWeight: `${props.fontWeight || 0}`,
        color: `${props.color || `#000`}`,
      }}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      height={props.height}
      width={props.width}
      padding={props.padding}
    />
  );
}
