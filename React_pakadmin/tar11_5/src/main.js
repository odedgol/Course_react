import React from "react";
import ReactDOM from "react-dom";
import PickAColors from "./PickAColors";
import "../css/main.css";

const App = () => {
  return (
    <div>
      <PickAColors />
    </div>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<App />, root);
