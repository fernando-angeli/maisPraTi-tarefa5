/* eslint-disable react/prop-types */
import styled from "styled-components";

const CustomInput = styled.input`
  border-radius: 0.3rem;
  padding: 1rem;
`;

function Input(props) {
  return (
    <CustomInput
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      readOnly={props.readOnly || false}
      style={{
        border: `${props.border || `1px solid gray`}`,
        color: `${props.color || `#000`}`,
        margin: `${props.margin || `1rem 0`}`,
        textDecoration: `${props.textDecoration || `none`}`,
        fontWeight: `${props.fontWeight || 0}`,
        width: `${props.width || `calc(80% - 2rem)`}`,
        height: `${props.height || `1.5rem`}`,
        backgroundColor: `${props.backgroundColor || `transparent`}`,
      }}
    />
  );
}

export default Input;
