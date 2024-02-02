import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    default:
      throw new Error("unknown action");
  }
}

export default function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function handleDec() {
    dispatch({ type: "dec" });
  }

  function handleInc() {
    dispatch({ type: "inc" });
  }

  return (
    <div className="counter">
      <div className="count">
        <button onClick={handleDec}>&#45;</button>
        <h3>Count: {state.count}</h3>
        <button onClick={handleInc}>&#43;</button>
      </div>
    </div>
  );
}
