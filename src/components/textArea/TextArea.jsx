/* eslint-disable react/prop-types */
import styled from "styled-components";

const TextAreaStyled = styled.textarea`
  overflow: hidden;
  resize: none;
  height: 3rem;
`;

export default function TextArea(props) {
  return (
    <TextAreaStyled
      style={{
        width: `${props.width || `calc(80% - 2rem)`}`,
        backgroundColor: `${props.backgroundColor || `transparent`}`,
        border: `${props.border || `1px solid gray`}`,
        borderRadius: `0.3rem`,
        margin: `${props.margin || `1rem 0`}`,
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
