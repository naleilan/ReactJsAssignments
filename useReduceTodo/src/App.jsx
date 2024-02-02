import React, { useReducer, useState } from "react";

const ACTIONS = {
  TODO_ADD: "add",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TODO_ADD:
      return [...state, newTodo(action.payload.name)];
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.TODO_ADD, payload: { name: name } });
    setName("");
  }
  console.log(state);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
}
