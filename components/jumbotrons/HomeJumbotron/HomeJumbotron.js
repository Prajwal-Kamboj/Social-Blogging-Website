import React, {useCallback, useEffect, useState} from 'react';
import ReactGA from "react-ga";
import { TextLoop } from "react-text-loop-next";
import {isIOS, isMobile} from "react-device-detect";
import Button from "react-bootstrap/Button";

import {isDeviceMobile} from "../../../libs/utils";
import VideoPlayModal from "../../modals/VideoPlayModal";
import {ApplePlayStore} from "../../../libs/constants";

const headingList = [
    'Gift A Birthday Wish From <br class="d-none d-md-block"/> <span>Kareena Kapoor</span> 🎂',
    'Request <span>Ranveer Singh</span> To <br class="d-none d-md-block"/> Surprise Your Friend 💜',
    'Get <span>Tiger Shroff</span> To Motivate <br class="d-none d-md-block"/> You Or A Friend 😄',
    'Send A Warm  Message <br class="d-none d-md-block"/> From <span>Janhvi Kapoor</span> 😇',
    'Make Birthdays Unforgettable <br class="d-none d-md-block"/> With <span>Jacqueline Fernandez</span> 🎉',
]

const HomeJumbotron = (props) => {
    let [videoSrc, setVideoSrc] = useState('');

    useEffect(() => {
        branch.logEvent('view_home', "Home Page Visit");
        clevertap.event.push('Landing Page Home Screen');
        ReactGA.pageview('/home', 'Landing Page Home Screen');
        ReactGA.event({action: 'Home Screen', category: 'Landing Page'});
    }, []);

    const handlePlayVideo = useCallback(() => {
        let video = 'https://cdn.truefans.in/website-sample-videos/featured-mashup-desktop.mp4'
        if (isDeviceMobile()) video = 'https://cdn.truefans.in/website-sample-videos/featured-mashup-mobile.mp4'
        setVideoSrc(video);
    }, []);

    const mobileStoreLink = useCallback((type) => {
        if (type === 'android') {
            window.open('https://llep7.app.link/y4yfxKpbcmb?%243p=a_custom_1002181736947292747');
            branch.logEvent('download_android', "App store Apple");
            clevertap.event.push('Play store Android');
            ReactGA.event({action: 'Android', category: 'Play store website'});
        } else {
            window.open(ApplePlayStore);
            branch.logEvent('download_apple', "App store Apple");
            clevertap.event.push('App store Apple');
            ReactGA.event({action: 'Apple', category: 'Play store website'});
        }
    }, []);

    return (
        <section className="home-jumbotron-container">
            {!!videoSrc && <VideoPlayModal show={!!videoSrc} src={videoSrc}
                                           handleClose={() => setVideoSrc('')}/>}

                <video className="home-jumbotron-video d-none d-md-block" autoPlay={true} muted loop playsInline
                       onClick={handlePlayVideo}
                       src={'https://cdn.truefans.in/website-sample-videos/Featured-mashup-gif-desktop.mp4'}>
                    Your browser does not support the video tag.
                </video>
                <video className="home-jumbotron-video d-md-none" autoPlay={true} muted loop playsInline
                       src={'https://cdn.truefans.in/website-sample-videos/Featured-mashup-gif-app.mp4'}>
                    Your browser does not support the video tag.
                </video>

            <div className="home-jumbotron container" onClick={handlePlayVideo}>
                <div className="row home-jumbotron-row" onClick={(e) => e.stopPropagation()}>
                    <div className="col-12">
                        <TextLoop interval={4500} springConfig={{stiffness: 80, damping: 20}} noWrap={!isMobile}>
                            {headingList.map((text, index) =>
                                <h1 className="home-jumbotron-heading" key={index + 1}
                                    dangerouslySetInnerHTML={{__html: text}}/>
                            )}
                        </TextLoop>
                        <p className="home-jumbotron-description">
                            Play filmy quizzes and win a personalized Video <br
                            className="d-none d-md-block"/> Message from your favourite
                            celebrity!
                        </p>
                        <Button className="custom-btn-primary d-none d-md-inline-block"
                                onClick={() => mobileStoreLink(isIOS ? null : 'android')}>
                            Download TrueFan
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(HomeJumbotron);
