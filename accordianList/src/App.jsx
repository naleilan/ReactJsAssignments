import React, { useState } from "react";

const faqs = [
  {
    title: `What is the result of the following expression? 
                console.log(5 + "5");`,
    text: `"55"`,
  },
  {
    title: `What is the difference between 'let', 'const', and 'var' when declaring variables? `,
    text: `'var' is function-scoped and can be redeclared.
    - 'let' is block-scoped and can be reassigned.
    - 'const' is block-scoped and cannot be reassigned.`,
  },
  {
    title: `What does the '===' operator do in JavaScript?`,
    text: `The '===' operator checks for both value and type equality.`,
  },
  {
    title: ` How do you create an array in JavaScript?`,
    text: `var myArray = [1, 2, 3, 4, 5];`,
  },
];

export default function App() {
  return <Accordian data={faqs} />;
}

function Accordian({ data }) {
  const [curOpen, setIsOpen] = useState(null);

  return (
    <div className="accordian">
      {data.map((el, i) => (
        <AccordianList
          curOpen={curOpen}
          onOpen={setIsOpen}
          title={el.title}
          key={el.title}
          num={i}
        >
          {el.text}
        </AccordianList>
      ))}
    </div>
  );
}

function AccordianList({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle({ curOpen }) {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className="item">
      <div
        className={`numtitle ${isOpen ? "open" : ""}`}
        onClick={handleToggle}
      >
        <p className="number"> {num < 9 ? `0${num + 1} ` : num + 1}</p>
        <p className="title">{title}</p>
        <p className="icon"> {isOpen ? "-" : "+"}</p>
      </div>
      {isOpen && <div className="text">{children}</div>}
    </div>
  );
}
