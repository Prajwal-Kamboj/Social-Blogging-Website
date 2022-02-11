import React , {useState, useEffect} from "react";
import Page from "../components/Page";
import {useRouter} from "next/router";

import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

const Users = (props) =>{
    const router = useRouter();
    const [users, setUsers] = useState({});
    
    const fetchUsers = async () =>{
      const response = await fetch('http://localhost:3000/users', {method:'GET', headers: { 'Content-Type': 'application/json' },});
      const json = await response.json();
      // setData(response);
      setUsers(json.data);
      console.log(json);

    }

    useEffect(() =>{
         fetchUsers();
         console.log("data",users)

    },[])
    return(
        <Page>
        <h1 className="text-center pd-20">
          List of all users
        </h1>
        { users.lenght>0 ? 
        <>{users.map((item, index)=>{
          return (
            <div key={index} className="text-center">
              <ListGroup as="ol" numbered>
                <ListGroup.Item as="li">{item.username}</ListGroup.Item>
              </ListGroup>
            </div>
          );
        })}</>:null}
        </Page>
        

    );
}

export default Users;