import React, { useEffect, useState } from 'react';
import AliceCarousel from "react-alice-carousel";
import Image from 'next/image';
import {Images} from "../../../libs/constants";


const HowItWorks = (props) => {
    let carouse = '';
    const [show, setShow] = useState(false);

    useEffect(()=> setShow(true),[])

    const items = [
        {
            image: Images.mobileFrames.howItWorks1,
            icon: Images.icons.num1,    
            text: `Choose the celebrity you want the video message from`,
        },
        {
            icon: Images.icons.num2,
            image: Images.mobileFrames.howItWorks2,
            text: `Choose the type of Video Message you want to request`,
        },
        {
            icon: Images.icons.num3,
            image: Images.mobileFrames.howItWorks3,
            text: `Play a celebrity quiz to prove that you are their TrueFan.`,
        },
        {
            icon: Images.icons.num4,
            image: Images.mobileFrames.howItWorks4,
            text: `Win the quiz to get a Video Message from celebrity at ₹299!`,
        },
    ]

    const renderItems = () => {
        return items.map((item, index) => (
            <div key={index}>
                <div className="item-container">
                    <img title={index} className="item-image" src={item.image} alt={item.image} />
                </div>
                <div className=" description-container" style={{fontSize: "16px"}}>
                    <img title={item.text} src={item.icon} style={{padding: "16px"}} alt={item.icon} 
                         width="72" height="100%"/>
                    <div className="op-8">{item.text}</div>
                </div>
            </div>
        ));
    }

    return (
        <section className="how-it-works" id="how-it-works">
            <div className="container">
                <h2 className="section-heading">
                    How <strong className="primary-color">TrueFan</strong> Works?
                </h2>
                <div className="row">
                    <div className="col-12 alice-carousel-container">
                        {show ?<AliceCarousel items={renderItems()} ref={(e) => carouse = e}
                               disableButtonsControls={true}
                               animationDuration={1000}
                               responsive={{0: {items: 1}, 767: {items: 2}, 991: {items: 4}}}
                               infinite={true}
                                /> :null}
                        <i className="fas fa-chevron-left alice-carousel-left-button text-primary"
                           onClick={() => carouse.slidePrev()}/>
                        <i className="fas fa-chevron-right alice-carousel-right-button text-primary"
                           onClick={() => carouse.slideNext()}/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HowItWorks;
