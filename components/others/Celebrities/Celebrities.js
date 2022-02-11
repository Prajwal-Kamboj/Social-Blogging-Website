import React from 'react';
import AliceCarousel from "react-alice-carousel";
import Image from 'next/image';
import Link from "next/link";

import {Images} from "../../../libs/constants";
import PropTypes from "prop-types";
import { withRouter } from 'next/router';

const items = [
    {
        image: Images.celebs.kareenaKapoor,
        name: `Kareena <br class="d-md-none"/> Kapoor`,
        key: 'kareena-kapoor',
        url: '/bollywood-actor/kareena-kapoor'
    },
    {
        image: Images.celebs.ananyaPanday,
        name: `Ananya <br class="d-md-none"/> Panday`,
        key: 'ananya-panday',
        url: '/bollywood-actor/ananya-panday'
    },
    {
        image: Images.celebs.jacqueline,
        name: `Jacqueline <br class="d-md-none"/> Fernandez`,
        key: 'jacqueline-fernandez',
        url: '/bollywood-actor/jacqueline-fernandez'
    },
    {
        image: Images.celebs.ranveerSingh,
        name: `Ranveer <br class="d-md-none"/> Singh`,
        key: 'ranveer-singh',
        url: '/bollywood-actor/ranveer-singh'
    },
    {
        image: Images.celebs.janhviKapoor,
        name: `Janhvi <br class="d-md-none"/> Kapoor`,
        key: 'janhvi-kapoor',
        url: '/bollywood-actor/janhvi-kapoor'
    },
    {
        image: Images.celebs.tigerShroff,
        name: `Tiger <br class="d-md-none"/> Shroff`,
        key: 'tiger-shroff',
        url: '/bollywood-actor/tiger-shroff'
    },
]

let carouse = null;

const Celebrities = (props) => {
    let {className, heading} = props
    // console.log(props)

    const renderItems = () => {
        let {name} = props.router.query;
        return props.celebList.filter(c => c.key !== name).map((item, index) => (
            <div className="item-container" key={index}>
                <Link href={item.url}>
                    <a>
                        <div className="item-image">
                            <Image src={item.image} alt={item.image} title={item.name} layout="fill"/>
                        </div>
                        <p className="item-text" dangerouslySetInnerHTML={{__html: item.name}}/>
                    </a>
                </Link>
            </div>
        ));
    }

    return (
        <section className={`celebrities-container ${className}`}>
            <div className="container">
                <h2 className="section-heading" dangerouslySetInnerHTML={{__html: heading}}/>
                <div className="row">
                    <div className="col-12 alice-carousel-container">

                        <AliceCarousel items={renderItems()} ref={(e) => carouse = e}
                                       disableButtonsControls={true}
                                       animationDuration={1000}
                                       responsive={{0: {items: 2}, 767: {items: 3}, 991: {items: 4}}}/>
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

Celebrities.propTypes = {
    heading: PropTypes.string,
    className: PropTypes.string,
    faqs: PropTypes.array,
};

Celebrities.defaultProps = {
    heading: `Top <strong class="primary-color">Bollywood Actors <br class="d-md-none"/></strong> Are Here!`,
    className: '',
    celebList: items,
};

export default React.memo(withRouter(Celebrities));
