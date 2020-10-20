import React from "react";
import ReactDOM from "react-dom";
import MultiInput from "./multiInput";
import "../css/main.css";

const App = () => {
  return (
    <div>
      <MultiInput />
    </div>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<App />, root);
