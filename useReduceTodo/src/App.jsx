import React, { useEffect, useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  TODO_ADD: "add",
  TODO_COMPLETE: "done",
  TODO_DELETE: "delete",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.TODO_ADD:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TODO_COMPLETE:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.TODO_DELETE:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("name");
    return saved ? JSON.parse(saved) : "";
  });

  useEffect(() => {
    // storing input name if it's not empty
    if (name !== "") {
      localStorage.setItem("name", JSON.stringify(name));
    }
  }, [name]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.TODO_ADD, payload: { name: name } });
    setName("");
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (name !== "") {
  //     dispatch({ type: ACTIONS.TODO_ADD, payload: { name: name } });
  //     setName("");

  //     // Update local storage after adding a new todo
  //     const updatedTodos = [...todos, newTodo(name)];
  //     localStorage.setItem("name", JSON.stringify(updatedTodos));
  //   }
  // }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add Todo"
        />
      </form>
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} dispatch={dispatch} />;
      })}
    </div>
  );
}
