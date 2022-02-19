import React , {useState, useEffect} from "react";
import Page from "../components/Page";
import {useRouter} from "next/router";

import { Button } from "react-bootstrap";

const Login = (props) =>{
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const onInputChange = (input, e) =>{
        input === 'username' ? setUsername(e.target.value) : setPassword(e.target.value);
        
    }
    const handleClick = async ()=>{
        const user = {
            username:username,
            password:password
        }
        console.log(JSON.stringify(user))
        if(username.length <4 || password.length <4){
            setErrorText(true);
            username.length < 4 ? setErrorMessage('Enter valid username') : setErrorMessage('Enter valid Password');
        }
        else{
            setErrorText(false);
            setErrorMessage('');
            const result = await fetch('http://localhost:4000/users', {method:'POST', body: JSON.stringify(user), headers: { 'Content-Type': 'application/json' },});
            const response = await result.json();
            router.push('/users')
        }
        

    }
    const {type} = router.query;
    return(
        <Page>
        <div className="login-container text-center">       
            <div className="form">
                <h3 className="form-heading">
                    {type ==='login' ? 'Please Log in' : 'Please Sign up'}
                </h3>
                <div className="inputs">
                <input type="text" placeholder={`${type==='login' ? 'Username':'Set Username'}`} onChange={(e)=>onInputChange('username',e)}></input>
                <input type="text" placeholder={`${type==='login' ? 'Password':'Set Password'}`} onChange={(e)=>onInputChange('password',e)}></input>
                </div>
                <p  style={{color:"red"}}>{errorMessage}</p>
                <Button className="login-button" onClick={(e)=>handleClick()}> {type ==='login' ? 'Sign in' : 'Register'} </Button>
            </div>
        </div>
        </Page>
        

    );
}

export default Login;