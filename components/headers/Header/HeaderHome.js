import React, {useEffect, useState} from 'react';
import Link from 'next/link';

import {Images} from "../../../libs/constants";
import {isIOS} from "react-device-detect";
import {mobileStoreLink} from "../../../libs/utils";
import Button from "react-bootstrap/Button";

const HeaderHome = () => {
    const [color, setColor] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 300 && !color) setColor(true);
        else if (window.scrollY < 300 && color) setColor(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <header className={`main-navbar ${!color ? '' : 'active'}`}>
            <div className="container navbar-with-button">
                <Link href="/">
                    <img className="brand-logo" src={Images.logo_white} alt="TrueFan"/>
                </Link>
                <Button className="custom-btn-primary" onClick={() => mobileStoreLink(isIOS ? null : 'android')}>
                    Download TrueFan
                </Button>
            </div>
        </header>
    )

}

export default React.memo(HeaderHome);
