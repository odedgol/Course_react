import React  from "react";
import ReactDOM from "react-dom";
import TimeBumper from "./TimeBumper";
import "../css/main.css";

const App = () => {
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
