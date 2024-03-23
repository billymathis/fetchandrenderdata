import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);

  const sortData = () => {
    const sortedData = [...data].sort((a, b) => a.text.localeCompare(b.text));
    setData(sortedData);
  };

  useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("There was an error!", error));
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      <button onClick={sortData}>Sort Alphabetically</button>
      <div className="container mt-5">
        <h1 className="mb-3">Cat facts List</h1>
        <ul className="list-group">
          {data.map((item) => (
            <li key={item.id} className="list-group-item">{item.text} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
