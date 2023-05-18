import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://dummyjson.com/users";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  console.log(data);

  return (
    <div className="App">
      {data.users.map((val) => (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Ages</th>
            </tr>
          </thead>
          <tbody>
            {data.users.map((val) => (
              <tr key={val.id}>
                <td>{val.firstName}</td>
                <td>{val.lastName}</td>
                <td>{val.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default App;
