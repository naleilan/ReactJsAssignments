import React, { useState } from 'react';

export default function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  function handlePrvCount() {
    setCount(c => c - step);
  }

  function handleNextCount() {
    setCount(c => c + step);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(is => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="counter">
          <div className="step">
            <input
              id="rng"
              type="range"
              min="0"
              max="10"
              key={step}
              value={step}
              onChange={e => setStep(Number(e.target.value))}
            />
            <label htmlFor="rng">{step}</label>
          </div>
          <div className="count">
            <button onClick={handlePrvCount}>&#45;</button>
            <input
              type="text"
              value={count}
              key={count}
              onChange={e => setCount(Number(e.target.value))}
            />
            <button onClick={handleNextCount}>&#43;</button>
          </div>
          <div className="msg">
            <span>
              {' '}
              {count === 0
                ? 'Today is '
                : count > 0
                ? `${count} days from today is `
                : `${Math.abs(count)} days ago was `}
            </span>
            <span>{date.toDateString()}</span>
          </div>
          {count !== 0 || step !== 1 ? (
            <div>
              <button onClick={handleReset}>Reset</button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
