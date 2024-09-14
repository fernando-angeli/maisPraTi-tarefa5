import ContainerApp from "../../components/container/ContainerApp";
import Title from "../../components/title/Title";
import styled from "styled-components";
import TextArea from "../../components/textArea/TextArea";
import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import AddIcon from "@mui/icons-material/Add";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import TaskCard from "./TaskCard";
import {
  insertTaskDB,
  updateTaskDB,
  deleteTaskDB,
  getTasksUserByUserId,
} from "../../database/database";
import { useAuth } from "../../provider/authProvider";

const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding-top: 1rem;

  @media (max-width: 991px) {
    width: 100%;
    flex-direction: column;
  }
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
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;

  @media (max-width: 991px) {
    justify-content: space-around;
    height: 6rem;
  }
`;

const ButtonBox = styled.div`
  width: calc(10%);
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 991px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 20%;
  }
`;

const ListTasks = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow-y: auto;

  @media (min-height: 640px) {
    max-height: 39vh;
  }

  @media (min-height: 768px) {
    max-height: 50vh;
  }

  @media (min-height: 900px) {
    max-height: 63vh;
  }

  @media (min-height: 1080px) {
    max-height: 70vh;
  }

  @media (min-height: 1440px) {
    max-height: 78vh;
  }

  @media (min-height: 1600px) {
    max-height: 78vh;
  }

  @media (min-height: 2160px) {
    max-height: 84vh;
  }
`;

const H2 = styled.h2`
  font-size: 1rem;
  font-weight: 100;
  margin-top: 1rem;
`;

const H3 = styled.h3`
  font-size: 0.8rem;
  color: red;
  font-weight: gold;
  margin-top: 1rem;
`;

export default function ToDoList() {
  const { loggedUser } = useAuth();
  const [task, setTask] = useState({
    id: "",
    complete: false,
    description: "",
  });
  const [userTasks, setUserTasks] = useState([]);

  useEffect(() => {
    if (loggedUser) {
      setUserTasks(getTasksUserByUserId(loggedUser.id));
    }
  }, [loggedUser]);

  const handleChange = (event) => {
    setTask({ ...task, description: event.target.value });
  };

  const handleClearTask = () => {
    setTask({ id: "", complete: false, description: "" });
  };
  const handleCreateTask = () => {
    if (task.description.trim() !== "") {
      setUserTasks([...userTasks, task]);
      insertTaskDB(loggedUser.id, task);
      handleClearTask();
    }
  };

  const handleUpdateTask = (id, description, complete) => {
    updateTaskDB(loggedUser.id, { ...task, id, description, complete });
  };

  const handleDeleteTask = (taskId) => {
    deleteTaskDB(loggedUser.id, taskId);
    const updatedTasks = userTasks.filter((task) => task.id !== taskId);
    setUserTasks(updatedTasks);
  };

  return (
    <ContainerApp>
      <Title title="ToDo List" />
      <Tasks>
        <InsertTask>
          <TextArea
            value={task.description}
            name="description"
            type="text"
            onChange={handleChange}
            placeholder="Informe uma nova tarefa"
            height="100%"
            width="100%"
            padding="1rem"
          />
          <ButtonBox>
            <Button
              border="2px solid gray"
              borderRadius="0.3rem"
              textColor="#fff"
              backgroundColor="#155ec4"
              width="2.5rem"
              height="2.5rem"
              fontSize="1.1rem"
              type="submit"
              onClick={handleCreateTask}
            >
              <AddIcon />
            </Button>
            <Button
              border="2px solid gray"
              borderRadius="0.3rem"
              textColor="#fff"
              backgroundColor="red"
              width="2.5rem"
              height="2.5rem"
              fontSize="1.1rem"
              type="submit"
              onClick={handleClearTask}
            >
              <FormatClearIcon />
            </Button>
          </ButtonBox>
        </InsertTask>
        <Head>
          <H2>Status</H2>

          <H2>Tarefa</H2>
          <H2>Ação</H2>
        </Head>
        <ListTasks>
          {userTasks.length > 0 ? (
            userTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onUpdateTask={handleUpdateTask}
                onDelete={() => handleDeleteTask(task.id)}
              />
            ))
          ) : (
            <H3>Nenhuma tarefa encontrada.</H3>
          )}
        </ListTasks>
      </Tasks>
    </ContainerApp>
  );
}
