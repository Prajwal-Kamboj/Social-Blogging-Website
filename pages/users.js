import React , {useState, useEffect} from "react";
import Page from "../components/Page";
import {useRouter} from "next/router";

const host = process.env.HOST;
const Users = (props) =>{
    const router = useRouter();
    const [users, setUsers] = useState(props.notFound? 'Not found':props.data.data);
    
    const fetchUsers = async () =>{
      const response = await fetch(host+'/' , {method:'GET', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' }});
      const json = await response.json();
      console.log(json)
      if(json.success== true)setUsers(json.data);
    }

    useEffect(() =>{
         fetchUsers();
    },[])

    return(
        <Page loggedIn = {true}>
        <h1 className="text-center pd-20">
          Greetings
        </h1>
        <div>
          <h1> {users ? users.email:null} </h1>
        </div>
        <button onClick={()=> router.push(host+'/google')}>
          Login with google
        </button>
        
        </Page>
        

    );
}

export async function getServerSideProps(context) {
  const host = process.env.HOST;
  console.log(context.req.cookies)

  const res = await fetch(host+'/', {method:'GET', headers:{'Authorization': 'Bearer ' }});
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Users;