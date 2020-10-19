import React, { useState } from "react";
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
      <GuessNumber randNumber={Math.floor(Math.random() * 1000) + 1}/>
    </div>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<App />, root);
