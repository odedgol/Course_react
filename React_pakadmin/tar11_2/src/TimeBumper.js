import React, { useState } from "react";

export default function TimeBumper() {
  const [timeObj, setTimeObj] = useState({ seconds: 0, minutes: 0, hours: 0 });

  return (
    <div>
      Hours:
      <input
        type="number"
        value={timeObj.hours}
        onChange={(e) =>
          setTimeObj({
            seconds: e.target.value * 3600,
            minutes: e.target.value * 60,
            hours: e.target.value,
          })
        }
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      />
      Minutes:
      <input
        type="number"
        value={timeObj.minutes}
        onChange={(e) =>
          setTimeObj({
            seconds: e.target.value * 60,
            minutes: e.target.value,
            hours: (e.target.value / 60).toPrecision(3),
          })
        }
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      />
      Seconds:
      <input
        type="number"
        value={timeObj.seconds}
        onChange={(e) =>
          setTimeObj({
            seconds: e.target.value,
            minutes: e.target.value / 60,
            hours: (e.target.value / 3600).toPrecision(3),
          })
        }
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      />
    </div>
  );
}
