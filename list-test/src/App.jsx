import React, { useState } from "react";

const initialFreinds = [
  {
    id: 1,
    name: "Clark",
    balance: 10,
  },
  {
    id: 2,
    name: "Joe",
    balance: 3,
  },
];

export default function App() {
  const [friends, setFreidns] = useState([]);

  function handleAddFreind(freind) {
    setFreidns((friends) => [...friends, freind]);
  }

  return (
    <div className="app">
      <FreindList friends={friends} />
      <FormAddFreind onAddfreind={handleAddFreind} />
    </div>
  );
}

function FreindList({ friends }) {
  return (
    <ul>
      {friends.map((freind, i) => (
        <Freind freind={freind} key={i} />
      ))}
    </ul>
  );
}

function Freind({ freind }) {
  return (
    <li>
      {freind.id}
      <h3>{freind.name}</h3>
    </li>
  );
}

function FormAddFreind({ onAddfreind }) {
  const [name, setName] = useState("");

  const id = crypto.randomUUID();

  function handleSetName(e) {
    e.preventDefault();

    const newfreind = {
      id: id,
      name,
      balance: 0,
    };

    onAddfreind(newfreind);
  }

  return (
    <form action="form">
      <label>freind</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSetName}>Add</button>
    </form>
  );
}
