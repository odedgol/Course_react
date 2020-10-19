import React, { useState } from "react";
import tinycolor from "tinycolor2";

export default function PickAColors() {
  const [divColor, setDivColor] = useState();
  const triggers = [40, 30 , 20, 10, 0, -10, -20, -30 , -40];

  function createColor(source, trigger) {
    return tinycolor(source).lighten(trigger).toHexString();
  }

  return (
    <div>
      <div>
        <input
          type="color"
          //value={}
          onChange={(e) => setDivColor(e.target.value)}
          style={{
            borderColor: "gray",
            width: "50px",
            height: "25px",
            borderWidth: 1,
            border: "1px solid black",
          }}
        />
      </div>
      <br></br>
      <div style={{display:'flex'}}>
      {triggers.map(triger => {
        return ( <div
          style={{
            backgroundColor: createColor(divColor, triger),
            width: "50px",
            height: "50px",
            border: "1px solid black",
          }}
        ></div>)
      })
      }
      </div>
      
    </div>
  );
}
