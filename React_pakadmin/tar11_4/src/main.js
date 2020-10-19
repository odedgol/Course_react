import React, { useState } from "react";
import ReactDOM from "react-dom";
import PickAColor from "./PickAColor";
import "../css/main.css";

const App = () => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PickAColor/>
    </div>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<App />, root);
