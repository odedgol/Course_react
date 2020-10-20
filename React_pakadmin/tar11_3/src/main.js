import React from "react";
import ReactDOM from "react-dom";
import GuessNumber from "./GuessNumber";
import "../css/main.css";

const App = () => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <GuessNumber/>
    </div>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<App />, root);
