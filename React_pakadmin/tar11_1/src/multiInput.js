import React, { useState } from "react";

export default function MultiInput() {
  const [inputText, setInputText] = useState();

  function onChangeText(e) {
    setInputText(e.target.value);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "50%",
        justifyContent: 'start'

      }}
    >
      <div>
        <input
          type="text"
          value={inputText}
          onChange={onChangeText}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
      </div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={onChangeText}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
      </div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={onChangeText}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
      </div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={onChangeText}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
      </div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={onChangeText}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
      </div>
    </div>
  );
}
