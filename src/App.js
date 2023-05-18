import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";


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
      <h1 align="center">Users</h1>
      <h4 align="center">Period Table</h4>
      <TableContainer component={Paper} sx={{ maxWidth: 1000, minWidth: 400 }} margin>
        <Table aria-label="table" stickyHeader >
          <TableHead>
            <TableRow>
              <TableCell align="right"> ID </TableCell>
              <TableCell align="right"> First Name </TableCell>
              <TableCell align="right"> Last Name </TableCell>
              <TableCell align="right"> Age </TableCell>
              <TableCell align="right"> Period </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.users.map((val) => (
              <TableRow 
              key={val.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right"> {val.id} </TableCell>
                <TableCell align="right"> {val.firstName} </TableCell>
                <TableCell align="right"> {val.lastName} </TableCell>
                <TableCell align="right"> {val.age} </TableCell>
                <TableCell align="right"> ----- </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
