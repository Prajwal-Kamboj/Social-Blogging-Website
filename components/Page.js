import React from 'react';

import Header from './Header'


const Page = (props) =>{
    return(
        <>
        <div className={props.className}>
        <Header></Header>

        {props.children}
        </div>
        </>
    );
}

export default Page;