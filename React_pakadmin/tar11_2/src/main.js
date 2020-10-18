import React, { useState } from "react";
import ReactDOM from "react-dom";
import TimeBumper from "./TimeBumper";
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
      <TimeBumper/>
    </div>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<App />, root);
