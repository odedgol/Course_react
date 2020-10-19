import React, { useState } from "react";

export default function PickAColor() {
  const [divColor, setDivColor] = useState();
  console.log(divColor);
  return (
    <div>
      <div>
        Pick a color :{" "}
        <input
          type="color"
          //value={}
          onChange={(e) => setDivColor(e.target.value)}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
      </div>
      <div style={{ backgroundColor: divColor, width: "100px", height: "100px", border:'1px solid black'
 }}>
    
      </div>
    </div>
  );
}
