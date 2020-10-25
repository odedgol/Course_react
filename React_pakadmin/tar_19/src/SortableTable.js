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

  function sortInputData(columnName) {
    setColmnsClickCounter({
      ...columnsClickCounter,
      [columnName]: columnsClickCounter[columnName] + 1,
    });
    const results = inputData.sort(function (a, b) {
      if (a[columnsEnum[columnName]] > b[columnsEnum[columnName]]) {
        return columnsClickCounter[columnName] % 2 == 0 ? 1 : -1;
      }
      else if (a[columnsEnum[columnName]] < b[columnsEnum[columnName]]) {
        return columnsClickCounter[columnName] % 2 == 0 ? -1 : 1;
      }
      return 0;
    });
    setInputData([...results]);
  }

  function renderColumnData() {
    const { id, name, country, email } = {
      id: data[0][0],
      name: data[0][1],
      country: data[0][2],
      email: data[0][3],
    };
    return (
      <tr>
        <td>{id}</td>
        <td onClick={() => sortInputData("name")}>{name}</td>
        <td onClick={() => sortInputData("country")}>{country}</td>
        <td onClick={() => sortInputData("email")}>{email}</td>
      </tr>
    );
  }

  function renderTableData() {
    return inputData.map((row, index) => {
      const { id, name, country, email } = {
        id: row[0],
        name: row[1],
        country: row[2],
        email: row[3],
      };
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{country}</td>
          <td>{email}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <h1 id="title">SortableTable</h1>
      <table id="sortableTable">
        <tbody>
          {renderColumnData()} 
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
}
