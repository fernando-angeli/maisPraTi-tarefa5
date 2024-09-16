/* eslint-disable react/prop-types */
import styled from "styled-components";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { useState } from "react";

const Tasks = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2rem 4fr 0.5fr;
  text-align: center;
  height: 3rem;
  align-items: center;
  margin-top: 0.9rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  appearance: none; /* Remove o estilo padrão do checkbox */
  -webkit-appearance: none; /* Para Safari/Chrome */
  border: 1px solid #ccc; /* Define a borda do checkbox */
  border-radius: 0.2rem; /* Arredonda as bordas */
  background-color: white; /* Cor de fundo desmarcado */
  display: inline-block;
  position: relative;
  outline: none; /* Remove o outline ao focar */

  /* Adiciona o símbolo ✓ quando o checkbox está marcado */
  &:checked::after {
    content: "✓";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0e7604; /* Cor da marca de verificação */
    font-size: 1.8rem; /* Tamanho da marca */
    font-weight: bold;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const TaskCard = ({ task, onUpdateTask, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [complete, setComplete] = useState(task.complete ?? false);
  const [description, setDescription] = useState(task.description);

  const handleEditClick = () => {
    if (isEdit) onUpdateTask(task.id, description, complete);
    setIsEdit(!isEdit);
  };

  const handleCheckboxChange = () => {
    const newCompleteStatus = !complete;
    setComplete(newCompleteStatus);
    onUpdateTask(task.id, description, newCompleteStatus);
  };

  return (
    <Tasks
      style={{ backgroundColor: complete ? "#A8E9D1" : "rgb(233, 231, 138)" }}
    >
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          checked={complete}
          onChange={handleCheckboxChange}
          disabled={isEdit}
        />
      </CheckboxContainer>
      <Input
        type="text"
        value={description}
        name="task"
        id="task"
        border="none"
        readOnly={!isEdit}
        width="calc(100%-2rem)"
        height="1rem"
        margin="0"
        textDecoration={complete ? "line-through" : "none"}
        fontWeight={complete ? "0" : "600"}
        onChange={(e) => setDescription(e.target.value)}
        outline="none"
        cursor={isEdit ? "pointer" : ""}
      />
      {!complete && (
        <Actions>
          <Button
            description={isEdit ? <SaveAsIcon /> : <EditIcon />}
            border="none"
            textColor={complete ? "gray" : "blue"}
            width="2rem"
            height="2.5rem"
            fontSize="1rem"
            type="button"
            onClick={handleEditClick}
            disabled={complete}
            backgroundColor="transparent"
          />
          <Button
            description={<DeleteIcon />}
            border="none"
            textColor={complete || isEdit ? "gray" : "red"}
            color="red"
            width="2rem"
            height="2.5rem"
            fontSize="1rem"
            type="button"
            disabled={complete || isEdit}
            backgroundColor="transparent"
            onClick={onDelete}
          />
        </Actions>
      )}
    </Tasks>
  );
};

export default TaskCard;
