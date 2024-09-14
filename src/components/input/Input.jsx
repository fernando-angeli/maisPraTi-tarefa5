/* eslint-disable react/prop-types */
import styled from "styled-components";

const CustomInput = styled.input`
  border-radius: 0.3rem;
  box-sizing: border-box;
  width: ${(props) => (props.width ? props.width : `80%`)};
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
      width={props.width}
      style={{
        border: `${props.border || `1px solid gray`}`,
        color: `${props.color || `#000`}`,
        margin: `${props.margin || `1rem 0`}`,
        textDecoration: `${props.textDecoration || `none`}`,
        fontWeight: `${props.fontWeight || 0}`,
        height: `${props.height || `2rem`}`,
        backgroundColor: `${props.backgroundColor || `transparent`}`,
        outline: `${props.outline}`,
        cursor: `${props.cursor}`,
        padding: `${props.padding || `1rem`}`,
      }}
    />
  );
}

export default Input;
