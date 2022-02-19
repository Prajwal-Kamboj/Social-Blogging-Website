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

const host = process.env.HOST;
const Users = (props) =>{
    const router = useRouter();
    const [users, setUsers] = useState();
    
    const fetchUsers = async () =>{
      const response = await fetch(host+'/' , {method:'GET', headers: { 'Content-Type': 'application/json' }});
      const json = await response.json();
      console.log(json)
      // setUsers(json);
    }

    useEffect(() =>{
         fetchUsers();
    },[])

    return(
        <Page>
        <h1 className="text-center pd-20">
          Greetings
        </h1>
        <div>
          <h1> {users ? users:null} </h1>
        </div>
        
        </Page>
        

    );
}

export default Users;