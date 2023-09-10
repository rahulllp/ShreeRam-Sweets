import React from 'react'
import { useState,useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { db } from "../firebase.config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const Feedbackans = () => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const empCollectionRef = collection(db, "FeedBackDetails");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>

<Paper sx={{ width: '100%', overflow: 'hidden' }}>
<Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
            Coustomers FeedBack
          </Typography>
          <Divider />



      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
             
                <TableCell
                  align="left"
                  style={{ minWidth: "100px"} }
                >
                  Name  
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px"} }
                >
                  Mobile Number  
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px"} }
                >
                  Message  
                </TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                   
                        <TableCell key={row.id} align="left">
                         {row.name}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                         {row.mobile}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                         {row.message}
                        </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

    </div>
  )
}

export default Feedbackans