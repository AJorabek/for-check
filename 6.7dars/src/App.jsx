import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { v4 as uuid } from "uuid";

function App() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [words, setWords] = useState([]);
  const [complete, setComplete] = useState("");
  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleChange2(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let input1i = document.getElementById("input1");
    let input2i = document.getElementById("input2");
    let input1 = input1i.value;
    let input2 = input2i.value;
    if (input1 && input2) {
      const newWords = [...words];
      const newWord = {
        id: uuid(),
        input1,
        input2,
        complete,
      };
      setWords(newWord);
    }
    setInput("");
    setName("");
  }
  return (
    <>
      <div>
        <form id="form">
          <input
            id="input1"
            type="text"
            value={input}
            placeholder="Eng word..."
            onChange={handleChange}
          />
          <input
            id="input2"
            type="text"
            value={name}
            placeholder="Uzb word..."
            onChange={handleChange2}
          />
          <button onClick={handleSubmit}>Add</button>
        </form>
        <div>
          <h4>Rendering word :</h4>
          <div>
            Full translation: {input} {name}
          </div>
          <div>
            Eng translation: {input}
            <br />
            Uzb tarjimasi: {name}
          </div>
          <ul id="list" style={{ display: "flex" }}>
            <h4 className="listH4">
              eng: <br /> uzb:
            </h4>
            {words.map((word) => (
              <li style={{ gap: "25px" }} key={word.id}>
                {word.input1}
                {word.input2}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
