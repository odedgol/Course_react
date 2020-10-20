import React, { useState } from "react";

export default function TimeBumper() {
  const [seconds, setSeconds] = useState();

  return (
    <div>
      Hours:
      <input
        type="number"
        value={(seconds / 3600).toPrecision(3)}
        onChange={(e) => setSeconds(e.target.value * 3600)}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      />
      Minutes:
      <input
        type="number"
        value={seconds / 60}
        onChange={(e) => setSeconds(e.target.value * 60)}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      />
      Seconds:
      <input
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      />
    </div>
  );
}
