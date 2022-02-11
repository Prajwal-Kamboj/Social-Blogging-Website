// External Imports
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
// My Imports
import Header from "../../headers/Header/Header";
import HeaderHome from '../../headers/Header';
import Footer from "../../footers/Footer";
import {scrollToTop} from "../../../libs/utils";
import {Meta} from "../../../libs/constants";
import Head from 'next/head';


const Page = (props) => {

    useEffect(() => {
        let {isScrollToTop} = props;
        if (isScrollToTop) {
            scrollToTop(0);
        }
    }, [])


    let {children, meta, className, showNavbar, showFooter} = props;
    meta = {...Meta, ...meta};
    meta.url += meta.path;

    return (
        <div className={`page-container ${className}`}>
            <Head>
                <meta name="viewport"
                      content="width=device-width,initial-scale=1,minimum-scale=1,shrink-to-fit=no,user-scalable=yes"/>
                <title>{meta.title}</title>
                {/*Primary Meta Tags*/}
                <meta name="title" content={meta.title}/>
                <meta name="description" content={meta.description}/>

                {/*Open Graph / Facebook*/}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={meta.url}/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:image" content={meta.image}/>

                {/*Twitter*/}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={meta.url}/>
                <meta property="twitter:title" content={meta.title}/>
                <meta property="twitter:description" content={meta.description}/>
                <meta property="twitter:image" content={meta.image}/>

                <link rel="canonical" href={meta.url}/>
            </Head>

            {showNavbar && props.home && <HeaderHome/>}
            {showNavbar && !props.home && <Header/>}

            {children}

            {showFooter && <Footer/>}
        </div>
    )
}

Page.propTypes = {
    meta: PropTypes.object,
    showNavbar: PropTypes.bool,
    showFooter: PropTypes.bool,
    isScrollToTop: PropTypes.bool,
    className: PropTypes.string,
};

Page.defaultProps = {
    meta: {},
    showNavbar: true,
    showFooter: true,
    isScrollToTop: true,
    className: '',
};

export default Page;
