import React, { useState } from "react";
import "../css/main.css";


export default function MultiInput() {
  const [inputText, setInputText] = useState();

  function onChangeText(e) {
    setInputText(e.target.value);
  }

  return (
    <div className="container">
      <div>
        <input
          type="text"
          value={inputText}
          onChange={onChangeText}
          className="item"
        />
      </div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={onChangeText}
          className="item"
        />
      </div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={onChangeText}
          className="item"
        />
      </div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={onChangeText}
          className="item"
        />
      </div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={onChangeText}
          className="item"
        />
      </div>
    </div>
  );
}
