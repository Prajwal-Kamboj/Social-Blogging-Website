import React, {useCallback, useEffect, useState} from 'react';
import ReactGA from "react-ga";
import {Images, SocialLinks} from "../../../libs/constants";
import {mobileStoreLink} from "../../../libs/utils";
import {isIOS} from "react-device-detect";
import {useRouter} from "next/router";


const FixedButton = () => {
    const [display, setDisplay] = useState(false);

    const handleFixedButtonScroll = () => {
        if (window.scrollY >= 300 && !display) setDisplay(true);
        else if (window.scrollY < 300 && display) setDisplay(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleFixedButtonScroll);
        return () => window.removeEventListener('scroll', handleFixedButtonScroll);
    });

    return (
        <div className={`fixed-footer d-md-none ${!!display && 'active'}`}>
            <p className="op-8 text-center" style={{margin: "16px 0px", fontSize: "14px"}}>
                Get Your Personalized Video Message!
            </p>
            <div className="fixed-button"
                 onClick={() => mobileStoreLink(isIOS ? null : 'android')}>
                Download TrueFan
            </div>
        </div>
    );
}

const Footer = (props) => {
    const router = useRouter();

    const hitClevertapEvent = useCallback((type) => {
        if (type === 'terms_of_use') {
            clevertap.event.push('Landing Page Terms of Use');
            ReactGA.event({action: 'Terms of Use', category: 'Landing Page'});
            router.push(`/terms-of-service`);
        } else if (type === 'privacy_policy') {
            clevertap.event.push('Landing Page Privacy Policy');
            ReactGA.event({action: 'Privacy Policy', category: 'Landing Page'});
            router.push(`/privacy-policy`);
        } else if (type === 'about_us') {
            clevertap.event.push('Landing Page About Us');
            ReactGA.event({action: 'About Us', category: 'Landing Page'});
            router.push(`/about-us`);
        } else if (type === 'facebook') {
            clevertap.event.push('Landing Page Facebook');
            ReactGA.event({action: 'Facebook', category: 'Landing Page'});
        } else if (type === 'instagram') {
            clevertap.event.push('Landing Page Instagram');
            ReactGA.event({action: 'Instagram', category: 'Landing Page'});
        } else if (type === 'twitter') {
            clevertap.event.push('Landing Page Twitter');
            ReactGA.event({action: 'Twitter', category: 'Landing Page'});
        } else if (type === 'linkedin') {
            clevertap.event.push('Landing Page LinkedIn');
            ReactGA.event({action: 'LinkedIn', category: 'Landing Page'});
        } else if (type === 'youtube') {
            clevertap.event.push('Landing Page YouTube');
            ReactGA.event({action: 'YouTube', category: 'Landing Page'});
        } else if (type === 'blog') {
            clevertap.event.push('Website Blog link');
            ReactGA.event({action: 'Website blog', category: 'Website Blog link'});
            window.open('https://www.truefan.in/blog/', '_self');
        }
    }, []);

    const socialMediaRoutes = useCallback((type) => {
        if (type === 'facebook') {
            window.open(SocialLinks.facebook, '_blank');
            hitClevertapEvent('facebook');
        } else if (type === 'instagram') {
            window.open(SocialLinks.instagram, '_blank');
            hitClevertapEvent('instagram');
        } else if (type === 'twitter') {
            window.open(SocialLinks.twitter, '_blank');
            hitClevertapEvent('twitter');
        } else if (type === 'linkedin') {
            window.open(SocialLinks.linkedin, '_blank');
            hitClevertapEvent('linkedin');
        } else if (type === 'youtube') {
            window.open(SocialLinks.youtube, '_blank');
            hitClevertapEvent('youtube');
        }
    }, []);

    const mobileStoreLink = useCallback((type) => {
        if (type === 'android') {
            window.open('https://llep7.app.link/dw2ltJubcmb?%243p=a_custom_1002181736947292747');
            branch.logEvent('download_android', "App store Apple");
            clevertap.event.push('Play store Android');
            ReactGA.event({action: 'Android', category: 'Play store website'});
        } else {
            window.open(ApplePlayStore);
            branch.logEvent('download_apple', "App store Apple");
            clevertap.event.push('App store Apple');
            ReactGA.event({action: 'Apple', category: 'Play store website'});
        }
    }, [])

    return (
        <React.Fragment>
            <section className="footer-component">
                <p className="make-with-love-in-india op-8">
                    Made with <img title="Made with love in India" src="/assets/images/heart.png" 
                                   className="heart-image" alt={'heart'} style={{opacity: "100%"}} width="100%"
                                   height="100%"/> in India
                </p>
                <div className="container">
                    <div className="row my-4 my-md-5 pt-md-3">
                        <div className="col-12 col-md-3 order-md-1 footer-nav-links">
                            <ul className="list-unstyled">
                                <li className="d-none d-md-block">
                                    <h4 className="text-primary mb-4">About</h4>
                                </li>
                                <li className="footer-nav-link op-8 ">
                                    <span onClick={() => hitClevertapEvent('blog')}>
                                        Blog
                                    </span>
                                </li>
                                <li className="footer-nav-link op-8 ">
                                    <span onClick={() => hitClevertapEvent('about_us')}>
                                        About Us
                                    </span>
                                </li>
                                <li className="footer-nav-link">
                                    <span onClick={() => hitClevertapEvent('privacy_policy')}>
                                        Privacy Policy
                                    </span>
                                </li>
                                <li className="footer-nav-link">
                                    <span onClick={() => hitClevertapEvent('terms_of_use')}>
                                        Terms of Use
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4 order-md-3 social-links-download-container">
                            <div className="mt-2 mt-md-5">
                                <h4 className="text-primary d-none d-md-block">Follow Us On</h4>
                                <ul className="list-unstyled text-center">
                                    <li className="footer-social-icons">
                                        <div className="footer-social-icon"
                                             onClick={() => socialMediaRoutes('facebook')}>
                                            <i className="fab fa-facebook-f social-icon"/>
                                        </div>
                                        <div className="footer-social-icon"
                                             onClick={() => socialMediaRoutes('instagram')}>
                                            <i className="fab fa-instagram social-icon"/>
                                        </div>
                                        <div className="footer-social-icon"
                                             onClick={() => socialMediaRoutes('twitter')}>
                                            <i className="fab fa-twitter social-icon"/>
                                        </div>
                                        <div className="footer-social-icon"
                                             onClick={() => socialMediaRoutes('youtube')}>
                                            <i className="fab fa-youtube social-icon"/>
                                        </div>
                                        <div className="footer-social-icon"
                                             onClick={() => socialMediaRoutes('linkedin')}>
                                            <i className="fab fa-linkedin-in social-icon"/>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="mb-4 download-app-text">Download TrueFan</h4>
                                <div className="download-app">
                                    <img title="Google Play Store" src={Images.icons.googlePlay} 
                                         className="download-app-image mr-md-3" width="100%" height="100%"
                                         alt={'android'} onClick={() => mobileStoreLink('android')}/>

                                    <img title="App Store" src={Images.icons.appStore} alt={'apple'} 
                                         onClick={() => mobileStoreLink()} width="100%" height="100%"
                                         className="download-app-image d-none d-md-inline-block"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 order-md-0">
                            <img title="TrueFan logo" className="brand-logo d-none d-md-block mb-5"
                                 src={Images.logo_white} alt="TrueFan"  width="100%" height="100%"/>
                            <div className="footer-copy-rights-content" id="contact-us">
                                <div className="mb-3 op-8">
                                    <i className="far fa-envelope mr-2"/>customersupport@truefan.in
                                    <br/>
                                    <i className="fas fa-phone-alt mt-3 mr-2"/>+91 93101 47015
                                </div>
                                <div className="mb-5 op-8">
                                    <div className="d-block d-md-flex align-items-baseline">
                                        <i className="fas fa-map-marker-alt mr-2"/> 501-A, Pinnacle Corporate Park,
                                        <br className="d-none d-md-inline-block"/>
                                        5th Floor, Near Trade Centre, BKC,
                                        <br className="d-none d-md-inline-block"/>
                                        Bandra (East), Mumbai 400051
                                    </div>
                                </div>

                                <p className="mb-4 pt-4 small">
                                    &copy; 2020 Hogwarts E-Learning Universe Private Limited. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FixedButton/>
        </React.Fragment>
    )
}

export default React.memo(Footer);
