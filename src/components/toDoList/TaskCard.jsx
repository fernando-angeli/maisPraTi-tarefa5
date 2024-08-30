/* eslint-disable react/prop-types */
import styled from "styled-components";
import Input from "../input/Input";
import Button from "../button/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { useState } from "react";

const Tasks = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 4fr 0.5fr;
  text-align: center;
  height: 3.5rem;
  align-items: center;
  margin-top: 1rem;
`;

const Checkbox = styled.input`
  width: 100%;
  height: 1.5rem;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export default function TaskCard({ task, onUpdateTask, onDelete }) {
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
      <Checkbox
        type="checkbox"
        checked={complete}
        onChange={handleCheckboxChange}
        disabled={isEdit}
      />
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
}
