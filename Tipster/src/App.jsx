import React, { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalc />
    </div>
  );
}

function TipCalc() {
  const [bill, setBill] = useState(0);
  const [service1, setService1] = useState(0);
  const [service2, setService2] = useState(0);

  const tip = (bill * (service1 + service2)) / 200;

  function handleReset() {
    setBill(0);
    setService1(0);
    setService2(0);
  }

  return (
    <div>
      <Bill bill={bill} onBill={setBill} />
      <Service service={service1} onSelect={setService1} person="you" />
      <Service service={service2} onSelect={setService2} person="your freind" />

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, onBill }) {
  return (
    <div>
      <label htmlFor="bill">How much was the bill?</label>
      <input
        type="text"
        id="bill"
        value={bill}
        onChange={(e) => onBill(Number(e.target.value))}
      />
    </div>
  );
}

function Service({ person, service, onSelect }) {
  return (
    <div>
      <label htmlFor="service">How did {person} like the service?</label>
      <select
        value={service}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Not good 0%</option>
        <option value="5">OK 5%</option>
        <option value="10">Good 10%</option>
        <option value="15">Very Good 15%</option>
        <option value="20">Amazing 20%</option>
      </select>
    </div>
  );
}

function Output({ bill, onBill, tip }) {
  return (
    <div>
      <p>
        `You pay ${bill + tip}, (${bill} + ${tip} tip )`
      </p>
    </div>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
