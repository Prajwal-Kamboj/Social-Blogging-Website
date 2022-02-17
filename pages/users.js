import React , {useState, useEffect} from "react";
import Page from "../components/Page";
import {useRouter} from "next/router";

import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Users = (props) =>{
    const router = useRouter();
    const [users, setUsers] = useState();
    
    const fetchUsers = async () =>{
      const response = await fetch('http://localhost:3000/users', {method:'GET', headers: { 'Content-Type': 'application/json' }});
      const json = await response.json();
      setUsers(json);
    }

    useEffect(() =>{
         fetchUsers();
    },[])

    return(
        <Page>
        <h1 className="text-center pd-20">
          Here is a List of all users
        </h1>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">something</TableCell>
            <TableCell align="right">Some other thing</TableCell>
            <TableCell align="right">wow)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { users ?  
        <>{users.map((item, index)=>{
          return (

            <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Username
            </TableCell>
            <TableCell align="right">{item.username}</TableCell>
            <TableCell align="right">{item.username}</TableCell>
            <TableCell align="right">{item.username}</TableCell>
            <TableCell align="right">{item.username}</TableCell>
          </TableRow>
          );
        })}</>:null}
           

        </TableBody>
      </Table>
    </TableContainer>
        
        </Page>
        

    );
}

export default Users;