import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';


function createData(id, month, number, amount, status, due) {
  return { id, month, number, amount, status, due};
}

const rows = [
  createData( 0,
    'Jun 2021',
      'KS2123093',
      8542.34,
      'Pending',
      'In 2days'),
  createData( 1,
    'May 2021',
    'KS1833093',
    7872.57,
    'Paid',
    "paid on 2Jun"),
  createData(2, 'Apr 2021', 'KS1233093', 6582.57, 'Paid', 'Paid on 3Mar'),
  createData( 3,
    ' Mar 2021',
    'KS0983093',
    2578.57,
    'Paid',
    'Paid on 10Mar'),
    createData(
      3,
      ' Feb 2021',
      'KS0673093',
      657.58,
      'Paid',
      'Paid on 7Mar',
    ), 
    createData(
      3,
      ' Jan 2021',
      'KS0013093',
      124.28,
      'Paid',
      'Paid on 8Feb',
    ),
];


const makeStyle=(status)=>{
  if(status === 'Paid')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}
const tableData=[
  { title: "users", number:"KS2123093"}
];


export default function BasicTable() {
  return (
    <>
     <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="table"
        disableClearable
        options={tableData.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  

      <div className="Table">
      <h3 className="m">Monthly value</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029", width:700 }}
        >
          <Table sx={{ minWidth: 650 }}  aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="TableHeaderCell">Month</TableCell>
                <TableCell align="left">Number</TableCell>
                <TableCell align="left">Amount</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Due</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.month}
                  </TableCell>
                  <TableCell align="left">{row.number}</TableCell>
                  <TableCell align="left">{ `$${row.amount}`}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">{row.due}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      </>
  );
}