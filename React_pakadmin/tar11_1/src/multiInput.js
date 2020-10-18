import React from "react";

export default function MultiInput({ inputText, setInputText }) {
  
  function onChangeText(e) {
    setInputText(e.target.value);
  }

  return (
      <div>
    <input
      type="text"
      value={inputText}
      onChange={onChangeText}
      style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
    />
    </div>
  );
}
