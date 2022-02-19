import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Logout } from '@mui/icons-material';


const Header = (props) =>{
    const router = useRouter();

    const logout = async () =>{
        const request = await fetch(process.env.HOST+'/auth/logout',{method:'POST'});
        const response = await request.json();
        if(response.success==true){
            router.push('/users');
        }else{
            alert('bad req')
        }
    }

    return(
        <header className="p-3 bg-dark text-white">
            <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-between ">
                <ArrowBackIcon onClick={() => router.back()}>Back</ArrowBackIcon>
                

                { props.loggedIn ? <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="" className="nav-link px-2 text-white">Home</a></li>
                <li><a href="" className="nav-link px-2 text-white">Features</a></li>
                <li><a href="" className="nav-link px-2 text-white">FAQs</a></li>
                <li><a href="" className="nav-link px-2 text-white">About</a></li>
                </ul> : <Link href="/" >
                    <a className="d-flex mr-5 align-items-start mb-2 mb-lg-0 text-white text-decoration-none h4">
                    Auth App
                    </a>
                </Link> }

            {!props.loggedIn ? <div className="text-end justify-content-end ">
                <Link href='/login?type=login'>
                <button type="button" className="btn btn-outline-light m-3">Login</button>
                </Link>
                <Link href='/login?type=signup'>
                <button type="button" className="btn btn-warning">Sign-up</button>
                </Link>
                </div>:
                <button type="button" className="btn btn-warning" onClick = {()=>logout()}>Logout</button>}
            </div>
            
            </div>
  </header>
    );
}

export default Header;