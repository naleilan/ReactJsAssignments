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

  function handlePrvStep() {
    if (step > 1) setStep(s => s - 1);
    console.log(step);
  }

  function handleNextStep() {
    if (step < 100) setStep(s => s + 1);
    console.log(step);
  }

  function handlePrvCount() {
    if (count > 1) setCount(c => c - step);
  }

  function handleNextCount() {
    if (count < 100) setCount(c => c + step);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(is => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="counter">
          <div className="step">
            <button onClick={handlePrvStep}>&#45;</button>
            <h3>Step: {step} </h3>
            <button onClick={handleNextStep}>&#43;</button>
          </div>
          <div className="count">
            <button onClick={handlePrvCount}>&#45;</button>
            <h3>Count: {count}</h3>
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
        </div>
      )}
    </div>
  );
}
