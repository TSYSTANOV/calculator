import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { Button } from "./components/Button";
import { EmptyToDoList } from "./components/EmptyToList";
import { ModalWindow } from "./components/ModalWindow";
import { TableTodo } from "./components/TableTodo";

function App() {
  const todosData = localStorage.getItem("todosApp")
    ? JSON.parse(localStorage.getItem("todosApp"))
    : [];

  const [todos, setTodos] = React.useState(todosData);
  const [openModal, setOpenModal] = React.useState(false);
  const [activeTodo, setActiveTodo] = React.useState(null);

  localStorage.setItem("todosApp", JSON.stringify(todos));

  function openModalTodo() {
    setOpenModal(true);
  }
  function setCompetedTodos(id, param) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !param;
        }
        return todo;
      })
    );
  }
  function sortTodosHandler() {
    setTodos([...todos].reverse());
  }
  function addTodoHandler({ task, comment }) {
    const newTodo = {
      task,
      comment,
      id: uuidv4(),
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  }
  function deleteTodoHandler(id) {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  }
  function changeTodoHandler(updateTodo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === updateTodo.id) {
          return { ...updateTodo };
        } else {
          return { ...todo };
        }
      })
    );
  }
  return (
    <>
      <div className="container">
        <header id="header">
          <h1>ToDo List</h1>
        </header>
      </div>
      <main>
        <div className="container">
          <div className="content">
            <div className="buttons">
              <Button className="newTask" onClick={openModalTodo}>
                Add Task
              </Button>
              <Button className="sort" onClick={sortTodosHandler}>
                Sort by lastest Task ⬆️
              </Button>
            </div>
            {todos.length === 0 && <EmptyToDoList />}
          </div>
        </div>
      </main>
      {(openModal || activeTodo) && (
        <ModalWindow
          setOpenModal={setOpenModal}
          addTodo={addTodoHandler}
          activeTodo={activeTodo}
          setActiveTodo={setActiveTodo}
          changeTodo={changeTodoHandler}
        />
      )}
      {todos.length > 0 && (
        <TableTodo
          todos={todos}
          deleteTodo={deleteTodoHandler}
          activeTodo={setActiveTodo}
          completedTodos={setCompetedTodos}
        />
      )}
    </>
  );
}

export { App };
