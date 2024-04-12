import { Todo } from "./ToDo";
function TableTodo({ todos, deleteTodo, activeTodo, completedTodos }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Comment</th>
          <th>Settings</th>
        </tr>
      </thead>
      <tbody className="tableBody">
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              activeTodo={activeTodo}
              completedTodos={completedTodos}
            />
          );
        })}
      </tbody>
    </table>
  );
}
export { TableTodo };
