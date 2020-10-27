import React, { useState } from "react";
import "../css/main.css";

export default function SortableTable({ data }) {
  const columnsEnum = { name: 1, country: 2, email: 3 };
  const [inputData, setInputData] = useState(data.slice(1, data.length));
  const [columnsClickCounter, setColmnsClickCounter] = useState({
    name: 0,
    country: 0,
    email: 0,
  });

  const titles = {
    id: data[0][0],
    name: data[0][1],
    country: data[0][2],
    email: data[0][3]
  };

  function sortInputData(columnName) {
    setColmnsClickCounter({
      ...columnsClickCounter,
      [columnName]: columnsClickCounter[columnName] + 1,
    });
    const results = inputData.sort(function (row1, row2) {
      if (row1[columnsEnum[columnName]] > row2[columnsEnum[columnName]]) {
        return columnsClickCounter[columnName] % 2 == 0 ? 1 : -1;
      }
      else if (row1[columnsEnum[columnName]] < row2[columnsEnum[columnName]]) {
        return columnsClickCounter[columnName] % 2 == 0 ? -1 : 1;
      }
      return 0;
    });
    setInputData([...results]);
  }

  return (
    <div>
    <h1 id="title">SortableTable</h1>
    <table id="sortableTable">
      <tbody>
        <tr>
          <th>{titles.id}</th>
          <th onClick={() => sortInputData("name")}>{titles.name}</th>
          <th onClick={() => sortInputData("country")}>{titles.country}</th>
          <th onClick={() => sortInputData("email")}>{titles.email}</th>
        </tr>
        {inputData.map((row, index) => (
          <tr key={index}>
            <td>{row[0]}</td>
            <td>{row[1]}</td>
            <td>{row[2]}</td>
            <td>{row[3]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}
