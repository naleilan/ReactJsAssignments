import React from "react";
import { ACTIONS } from "./App";

function Todo({ todo, dispatch }) {
  return (
    <div className="todo">
      <span
        style={{
          color: todo.complete ? "#1e1e1d" : "#1e1e1d",
          textDecoration: todo.complete ? "line-through" : "none",
        }}
      >
        {todo.name}
      </span>
      <div className="btn">
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.TODO_COMPLETE, payload: { id: todo.id } })
          }
        >
          ✔
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.TODO_DELETE, payload: { id: todo.id } })
          }
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default Todo;
