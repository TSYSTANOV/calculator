import React from "react";
function ModalWindow({
  setOpenModal,
  addTodo,
  activeTodo = false,
  setActiveTodo,
  changeTodo,
}) {
  const [task, setTask] = React.useState(activeTodo ? activeTodo.task : "");
  const [comment, setComment] = React.useState(
    activeTodo ? activeTodo.comment : ""
  );
  return (
    <div className="modal">
      <div className="modal-window">
        <h2 className="modal-title">
          {activeTodo ? "Edit task" : "Add New Task"}
          <span
            onClick={() => {
              setActiveTodo(null);
              setOpenModal(false);
            }}
            className="close-window"
          >
            X
          </span>
        </h2>
        <label htmlFor="task" className="label">
          {activeTodo && activeTodo.readOnly ? "Read Task" : "Write task"}
        </label>
        <textarea
          id="task"
          cols="30"
          rows="10"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          disabled={activeTodo && activeTodo.readOnly ? true : false}
        ></textarea>
        <label htmlFor="comment" className="label">
          {activeTodo && activeTodo.readOnly ? "Read Comment" : "Add comment"}
        </label>
        <textarea
          id="comment"
          cols="30"
          rows="10"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          disabled={activeTodo && activeTodo.readOnly ? true : false}
        ></textarea>
        {(!activeTodo || (activeTodo && !activeTodo.readOnly)) && (
          <button
            className="newTask-modal"
            onClick={() => {
              if (task && comment) {
                if (activeTodo) {
                  changeTodo({ ...activeTodo, task: task, comment: comment });
                } else {
                  addTodo({ task: task, comment: comment });
                }

                setActiveTodo(null);
                setOpenModal(false);
              }
            }}
          >
            {activeTodo ? "Edit" : "Add"}
          </button>
        )}
      </div>
    </div>
  );
}
export { ModalWindow };
