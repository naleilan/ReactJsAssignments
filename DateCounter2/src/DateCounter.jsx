import React, { useReducer } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw Error("Unknown action");
  }
}

export function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  const date = new Date("june 27 2027");
  date.setDate(date.getDate() + count);

  function handleDec() {
    dispatch({ type: "dec" });
  }

  function handleInc() {
    dispatch({ type: "inc" });
  }

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  function handleReset() {
    dispatch({ type: "reset" });
  }

  return (
    <div className="counter">
      <input
        type="range"
        min="0"
        max="10"
        key={step}
        value={step}
        onChange={defineStep}
      />
      <label htmlFor="rng">{step}</label>
      <div className="detail">
        <button onClick={handleDec}>-</button>
        <input type="text" value={count} onChange={defineCount} />
        <button onClick={handleInc}>+</button>
        <p>{date.toLocaleDateString()}</p>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
