import React, { useState } from "react";

export default function GuessNumber() {
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [outputMessage, setOutputMessage] = useState("");
  const [randNumber, setRandNumber] = useState(Math.floor(Math.random() * 1000) + 1);

  function onNumberChange(e) {
    const guessingNumber = e.target.value;
    setTotalGuesses(totalGuesses + 1);
    if (guessingNumber > randNumber) {
      setOutputMessage(
        totalGuesses % 10 === 0 ? "bigger than" : "smaller than"
      );
    } else if (guessingNumber < randNumber) {
      setOutputMessage(
        totalGuesses % 10 === 0 ? "smaller than" : "bigger than"
      );
    } else {
      setOutputMessage(
        `You did it!!!, the number was ${randNumber} total steps ${totalGuesses})`
      );
      setRandNumber(Math.floor(Math.random() * 1000) + 1);
    }
  }

  return (
    <div>
      Guess the Number between (1 : 1000)
      <input
        type="number"
        onChange={onNumberChange}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      />
      {outputMessage}
    </div>
  );
}
