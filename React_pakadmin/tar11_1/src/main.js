import React, { useState } from "react";
import ReactDOM from "react-dom";
import MultiInput from "../src/multiInput";
import "../css/main.css";

const App = () => {
  const [inputText, setInputText] = useState("test");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <MultiInput inputText={inputText} setInputText={setInputText} />
      <MultiInput inputText={inputText} setInputText={setInputText} />
      <MultiInput inputText={inputText} setInputText={setInputText} />
      <MultiInput inputText={inputText} setInputText={setInputText} />
      <MultiInput inputText={inputText} setInputText={setInputText} />
    </div>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<App />, root);
