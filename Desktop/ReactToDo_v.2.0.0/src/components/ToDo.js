import React from "react";
function Todo({ todo, deleteTodo, activeTodo, completedTodos }) {
  return (
    <tr data-id={todo.id}>
      <td>
        <input
          type="checkbox"
          className="check"
          checked={todo.isCompleted}
          onChange={() => {
            completedTodos(todo.id, todo.isCompleted);
          }}
        />
        <span className="oval" data-change-color-id="0">
          <span
            className="oval1"
            style={{ display: todo.isCompleted ? "block" : "none" }}
          ></span>
        </span>
        <p className="taskInformation">{todo.task}</p>
      </td>
      <td className="messageInformation">{todo.comment}</td>
      <td className="btnTD">
        <button
          className="settings"
          onClick={() => {
            activeTodo({ readOnly: true, ...todo });
          }}
        >
          🛡️ Info
        </button>
        <button
          className="settings"
          onClick={() => {
            activeTodo(todo);
          }}
        >
          🔧 Edit
        </button>
        <button
          className="settings"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          ✖️ Delete
        </button>
      </td>
    </tr>
  );
}
export { Todo };
