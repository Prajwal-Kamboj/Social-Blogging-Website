import React from 'react';
import Link from 'next/link';
import {Images} from "../../../libs/constants";

const Header = () => {

    return (
        <header className={`main-navbar`} style={{backgroundColor: "#1C1D23"}}>
            <Link href="/">
                <img className="brand-logo" src={Images.logo_white} alt="TrueFan"/>
            </Link>
        </header>
    )
}

export default React.memo(Header);