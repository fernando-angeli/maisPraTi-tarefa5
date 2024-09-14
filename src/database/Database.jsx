class Database {
  constructor() {
    this.database = {};
  }

  createUser(user) {
    const id = getNextId();
    user.id = id;
    localStorage.setItem("id_user", id);
    const usersStorage = localStorage.getItem("users");
    let updateUsers = [];
    if (usersStorage) {
      try {
        updateUsers = JSON.parse(usersStorage);
        if (!Array.isArray(updateUsers)) updateUsers = [];
      } catch (e) {
        console.error("Error", e);
        updateUsers = [];
      }
    }
    updateUsers = [...updateUsers, user];
    localStorage.setItem("users", JSON.stringify(updateUsers));
  }

  updateUser(updatedUser) {
    let usersStorage = JSON.parse(this.findUsers());
    usersStorage = usersStorage.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    localStorage.setItem("users", JSON.stringify(usersStorage));
  }

  findUsers() {
    return localStorage.getItem("users");
  }

  findUserById(userId) {
    const usersStorage = JSON.parse(this.findUsers());
    const user = usersStorage.find((u) => u.id === userId);
    return user ? user : null;
  }

  insertTask(userId, newTask) {
    const id = getNextTaskId();
    localStorage.setItem("id_task", id);
    newTask.id = id;
    let user = this.findUserById(userId);
    user.tasks.push(newTask);
    this.updateUser(user);
    return newTask;
  }

  updateTask(userId, updatedTask) {
    let user = this.findUserById(userId);
    user.tasks = user.tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.updateUser(user);
  }

  deleteTask(userId, deleteTaskId) {
    let user = this.findUserById(userId);
    user.tasks = user.tasks.filter((task) => task.id !== deleteTaskId);
    this.updateUser(user);
  }

  getTasksByUserId(userId) {
    const user = this.findUserById(userId);
    return user ? user.tasks : [];
  }
}

const database = new Database();

class User {
  constructor(name, username, password) {
    this.name = name;
    this.username = username;
    this.password = password;
    this.tasks = [];
  }
}

function getNextId() {
  if (!localStorage.getItem("id_user")) {
    localStorage.setItem("id_user", 0);
  }
  return parseInt(localStorage.getItem("id_user")) + 1;
}

function getNextTaskId() {
  if (!localStorage.getItem("id_task")) {
    localStorage.setItem("id_task", 0);
  }
  return parseInt(localStorage.getItem("id_task")) + 1;
}

export function createUser(user) {
  if (user) {
    const newUser = new User(user.name, user.username, user.password);
    database.createUser(newUser);
  }
}

export function loginUserDB(searchUser) {
  let validateUser = "";
  let users = JSON.parse(database.findUsers());
  if (searchUser && users) {
    users.forEach((user) => {
      if (
        user.username === searchUser.username &&
        user.password === searchUser.password
      )
        validateUser = user;
    });
  }
  return validateUser;
}

export function insertTaskDB(user, task) {
  return database.insertTask(user, task);
}

export function updateTaskDB(user, task) {
  return database.updateTask(user, task);
}

export function deleteTaskDB(user, deleteTaskId) {
  database.deleteTask(user, deleteTaskId);
}

export function getTasksUserByUserId(userId) {
  return database.getTasksByUserId(userId);
}
