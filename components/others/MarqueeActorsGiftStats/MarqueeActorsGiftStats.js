import React, {useMemo} from 'react';
import Marquee from "react-fast-marquee";

import {Images} from "../../../libs/constants";
import PropTypes from "prop-types";

const items = [
    {
        image: Images.icons.circleLight,
        text: `3-Day Delivery!`,
    },
    {
        image: Images.icons.circleHeart,
        text: `10M+ Happy Fans`,
    },
    {
        image: Images.icons.circleGift,
        text: `Coolest Gift Of 2022`,
    },
]
const MarqueeActorsGiftStats = (props) => {

    const renderItems = useMemo(() => {
        return props.marqueeList.map((item, index) => (
            <div className="item-container" key={index + 1}>
                <img width="100%" height="100%" title={item.text} className="item-image" key={index}
                     src={item.image} alt={item.image} />
                <p className="item-text">{item.text}</p>
            </div>
        ));
    }, [props.marqueeList]);

    return (
        <section className="marquee-actors-gift-stats-container">
            <h2 className="section-heading px-4">
                Perfect Gift For Your <br className="d-none d-sm-block"/> Loved Ones!
            </h2>
            <Marquee gradient={false} speed={50}>
                {renderItems}
                {renderItems}
            </Marquee>
        </section>
    )
}

MarqueeActorsGiftStats.propTypes = {
    marqueeList: PropTypes.arrayOf(PropTypes.shape({image: PropTypes.string, text: PropTypes.string})),
};

MarqueeActorsGiftStats.defaultProps = {
    marqueeList: items
};

export default React.memo(MarqueeActorsGiftStats);
