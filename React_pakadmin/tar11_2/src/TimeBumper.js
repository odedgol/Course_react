import React, { useState } from "react";

export default function TimeBumper() {
  const [timeObj, setTimeObj] = useState({ seconds: 0, minutes: 0, hours: 0 });

  function onSecondChanges(e) {
    const seconds = e.target.value;
    setTimeObj({ seconds, minutes: seconds / 60, hours: (seconds / 3600).toPrecision(3) });
  }

  function onMinutesChange(e) {
    const minutes = e.target.value;
    setTimeObj({
      seconds: minutes * 60,
      minutes: minutes,
      hours: (minutes / 60).toPrecision(3),
    });
  }

  function onHourChange(e) {
    const hours = e.target.value;
    setTimeObj({ seconds: hours * 3600, minutes: hours * 60, hours });
  }

  return (
    <div>
      Hours: 
      <input
        type="number"
        value={timeObj.hours}
        onChange={onHourChange}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      />
      Minutes: 
      <input
        type="number"
        value={timeObj.minutes}
        onChange={onMinutesChange}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      />
      Seconds: 
      <input
        type="number"
        value={timeObj.seconds}
        onChange={onSecondChanges}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      />
    </div>
  );
}
