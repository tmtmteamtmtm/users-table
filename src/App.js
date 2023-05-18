import { useState, useEffect } from "react";
import "./App.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
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



  return (
    <div className="App">
      <h1 align="center">Users</h1>
      <h4 align="center">Period Table</h4>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Period</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.users.map((val) => (
              <TableRow key={val.id}>
                <TableCell>{val.id}</TableCell>
                <TableCell>{val.firstName}</TableCell>
                <TableCell>{val.lastName}</TableCell>
                <TableCell>{val.age}</TableCell>
                <TableCell>///</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
