/* eslint-disable react/prop-types */
import styled from "styled-components";

const TextAreaStyled = styled.textarea`
  overflow: auto;
  resize: none;
  height: 4rem;
  width: calc(80% - 2rem);

  @media (min-width: 992px) {
    width: ${(props) => (props.width ? props.width : `calc(80% - 2rem)`)};
  }
  @media (max-width: 991px) {
    width: 100%;
    height: 10rem;
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
        padding: `1rem`,
        textDecoration: `${props.textDecoration || `none`}`,
        fontWeight: `${props.fontWeight || 0}`,
        color: `${props.color || `#000`}`,
      }}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
    />
  );
}
