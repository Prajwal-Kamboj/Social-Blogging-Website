import React, {useState, useEffect} from 'react';

import Page from '../components/Page';
import HomeCenter from '../components/Hero/HomeCenter';
import { hero } from '../pagesData/homeData';
import Carousel from '../components/Carousel'

const Home = (props) => {

    const [darkMode, setDarkMode] = useState(false);
    
    

    return (
        <Page className="parallax">
            <Carousel/>


        {hero.map((item,index)=>{
            return (
            <HomeCenter key={index} title={item.title} desc={item.desc}/>
            );})}

            

        </Page>

    
    );
}

export async function getServerSideProps({req, res}) {

    return {
        props: {},
    }
}

export default Home;