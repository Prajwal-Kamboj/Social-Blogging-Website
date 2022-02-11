import React, {useState} from 'react';
import AliceCarousel from "react-alice-carousel";
import Image from 'next/image';
import {Celebs, Items, News} from "./data";
import VideoPlayModal from "../../modals/VideoPlayModal";
import {Images} from "../../../libs/constants";

const WhatOurWinnersSaying = (props) => {
    let [videoSrc, setVideoSrc] = useState('');
    let carouse = '';

    const renderItems = () => {
        var renderItems = props.profile ? Items : Celebs;
        props.news ? renderItems = News : null;
        return renderItems.map((item, index) => (
            <div className="profile-card" key={index}>
                <div className="card-video">
                <Image  title={index}  src={item.videoThumb} alt={item.videoThumb}
                     onClick={() => handleClickCard(item.video)} layout="fill" />
                </div>
                
                {!props.news ? <div className="play-icon">
                    {/* <Image title="play button" src={Images.icons.play} alt={Images.icons.play}
                         onClick={() => handleClickCard(item.video)} layout="fill" /> */}
                    <img title="play button" src={Images.icons.play} alt={Images.icons.play}
                         onClick={() => handleClickCard(item.video)} />
                </div> : null}
                {props.profile ?
                    <div className="fan-reaction-carousel text-primary" key={index}>
                        <div className="fan-profile-details">
                            <div className="fan-profile">
                                <div className="profile-image">
                                <Image title={item.name}  src={item.image} alt={item.name}  layout="fill"
                                     />
                                    </div>
                                {/* <img title={item.name}  src={item.image} alt={item.name} 
                                     /> */}
                                <p className="profile-name">
                                    {item.name}
                                    <br/>
                                    <span className="profile-city text-secondary">{item.city}</span>
                                    {props.news ? <span className="profile-city text-primary" style={{
                                        marginTop: "0.5em",
                                        fontSize: "1em"
                                    }}>{item.news}</span> : null}
                                </p>
                            </div>
                        </div>
                    </div>
                    : null}

                <div className="card-text text-secondary">{item.description}</div>
            </div>
        ));
    }

    const handleClickCard = (url) => {
        if (!props.news) {
            setVideoSrc(url);
        } else {
            window.open(url);
        }
    }

    return (
        <section className="what-our-winners-saying" id="testimonial">
            {!!videoSrc && <VideoPlayModal show={!!videoSrc} src={videoSrc}
                                           handleClose={() => setVideoSrc('')}/>}

            <h2 className="section-heading px-3">
                {props.heading} {props.profile ? <br className="d-md-none"/> : null} <strong
                className="primary-color">{props.colorHeading}</strong></h2>


            {!props.profile ?
                <p className="what-our-winners-desc">
                    A personalized Video Message is an approx. 30-second long video recorded with your name
                    mentioned by the celebrity. Watch a sample here.
                </p>
                : null}

            <div className="container alice-carousel-container" style={{padding: "0px", width: "100%"}}>
                <AliceCarousel items={renderItems()} ref={(e) => carouse = e}
                               disableButtonsControls={true}
                               autoPlay={false}
                               autoPlayInterval={7000}
                               animationDuration={1000}
                               responsive={{0: {items: 1}, 767: {items: 2}, 991: {items: 3}}}
                               infinite={true}
                               >
                    
                </AliceCarousel>
                <i className="fas fa-chevron-left alice-carousel-left-button text-primary"
                   onClick={() => carouse.slidePrev()}/>
                <i className="fas fa-chevron-right alice-carousel-right-button text-primary"
                   onClick={() => carouse.slideNext()}/>
            </div>

        </section>
    )
}

export default React.memo(WhatOurWinnersSaying);
