import React from "react";
import { ACTIONS } from "./App";

function Todo({ todo, dispatch }) {
  return (
    <div className="todo">
      <div className="top">
        <input
          className="checkbox"
          type="checkbox"
          onClick={() =>
            dispatch({ type: ACTIONS.TODO_COMPLETE, payload: { id: todo.id } })
          }
        />
        {/* <span class="checkmark"></span> */}
        <span
          style={{
            color: todo.complete ? "#1e1e1d" : "#1e1e1d",
            textDecoration: todo.complete ? "line-through" : "none",
          }}
        >
          {todo.name}
        </span>
      </div>
      <div className="bottom">
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
