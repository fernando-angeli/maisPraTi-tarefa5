import Container from "../container/Container";
import Title from "../title/Title";
import styled from "styled-components";
import Input from "../input/Input";
import { useState, useContext, useEffect } from "react";
import Button from "../button/Button";
import TaskCard from "./TaskCard";
import {
  insertTaskDB,
  updateTaskDB,
  deleteTaskDB,
} from "../../database/Database";
import { AuthContext } from "../contexts/AuthContext";

const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  border-top: 1px solid;
  padding-top: 1rem;
  border-bottom: 1px solid;
  padding-bottom: 1rem;
`;

const Head = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 4fr 0.5fr;
  border-bottom: 1px solid gray;
  text-align: center;
`;

const InsertTask = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const H2 = styled.h2`
  font-size: 1rem;
  font-weight: 100;
`;

export default function ToDoList() {
  const { loggedUser } = useContext(AuthContext);
  const [task, setTask] = useState({
    id: "",
    complete: false,
    description: "",
  });
  const [userTasks, setUserTasks] = useState(loggedUser.tasks || []);

  useEffect(() => {
    if (loggedUser) setUserTasks(loggedUser.tasks);
  }, [loggedUser, userTasks]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const handleCreateTask = () => {
    if (task.description.trim() !== "") {
      setUserTasks({ ...userTasks, task });
      insertTaskDB(loggedUser, task);
      setTask({ id: "", complete: false, description: "" });
    }
  };

  const handleUpdateTask = (id, description, complete) => {
    updateTaskDB(loggedUser, { ...task, id, description, complete });
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = userTasks.filter((task) => {
      task.id !== taskId;
    });
    setUserTasks(updatedTasks);
    deleteTaskDB(loggedUser, taskId);
  };

  return (
    <Container>
      <Title title="ToDo List" />
      <Tasks>
        <InsertTask>
          <Input
            type="text"
            value={task.description}
            name="description"
            id="description"
            width="80%"
            height="1rem"
            onChange={handleChange}
            placeholder="Criar tarefa"
          />
          <Button
            description="Incluir"
            border="2px solid gray"
            borderRadius="0.3rem"
            textColor="#fff"
            backgroundColor="#155ec4"
            width="8rem"
            height="2.5rem"
            fontSize="1.1rem"
            type="submit"
            onClick={handleCreateTask}
          />
        </InsertTask>
        <Head>
          <H2>Status</H2>
          <H2>Tarefa</H2>
          <H2>Ação</H2>
        </Head>
        {userTasks.length > 0 ? (
          userTasks.map((task, index) => (
            <TaskCard
              key={index}
              task={task}
              onUpdateTask={handleUpdateTask}
              onDelete={() => handleDeleteTask(task.id)}
            />
          ))
        ) : (
          <h2>Nenhuma tarefa criada.</h2>
        )}
      </Tasks>
    </Container>
  );
}
