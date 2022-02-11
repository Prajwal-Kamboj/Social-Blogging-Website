import React, {PureComponent, useState} from 'react';
import AliceCarousel from "react-alice-carousel";

import VideoPlayModal from "../../modals/VideoPlayModal";
import {Images} from "../../../libs/constants";
import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";


const BollywoodReviews = (props) => {
   

    //     state = {
    //         videoSrc: '',
    //     };
    // }

    const [state, setState] = useState('');



    let carouse = '';

    const renderItems = () => {
        return props.reviews.map((item, index) => (
            <div className="profile-card" key={index}>
                <img title={item.review} className="card-video" src={item.thumbnail} alt={item.thumbnail}
                     onClick={() => handleClickCard(item.videoUrl)} loading="lazy"/>
                <div className="play-icon">
                    <img title="play button" src={Images.icons.play} alt={Images.icons.play}
                         onClick={() => handleClickCard(item.videoUrl)} loading="lazy"/>
                </div>
                <div className="fan-reaction-carousel text-primary" key={index}>
                    <div className="fan-profile-details">
                        <div className="fan-profile">
                            <img title={item.winnerName} className="profile-image" src={item.thumbnailUser}
                                 alt={item.winnerName} loading="lazy"/>
                            <div className="profile-name">
                                <span>
                                    {item.winnerName}
                                    <br/>
                                <span className="profile-city text-secondary">{item.city}</span>
                                </span>
                                <StarRatings rating={5} starRatedColor="#FDD643" numberOfStars={5} starDimension="18px"
                                             starSpacing="2px"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-text text-secondary">{item.review}</div>
            </div>
        ));
    }

    const handleClickCard = (url) => {
        setState( url);
    }

        let videoSrc = state;

        return (
            <section className="what-our-winners-saying bollywood-reviews" id="testimonial">
                {!!videoSrc && <VideoPlayModal show={!!videoSrc} src={videoSrc}
                                               handleClose={() => setState( '')}/>}

                <h2 className="section-heading px-3">{props.heading}</h2>

                <div className="container alice-carousel-container">
                    <AliceCarousel ref={(e) => carouse = e}
                                   disableButtonsControls={true}
                                   autoPlay={false}
                                   autoPlayInterval={7000}
                                   animationDuration={1000}
                                   responsive={{0: {items: 1}, 767: {items: 2}, 991: {items: 3}}}
                                   infinite={true}>
                        {renderItems()}
                    </AliceCarousel>
                    <i className="fas fa-chevron-left alice-carousel-left-button text-primary"
                       onClick={() => carouse.slidePrev()}/>
                    <i className="fas fa-chevron-right alice-carousel-right-button text-primary"
                       onClick={() => carouse.slideNext()}/>
                </div>

            </section>
        )
    
}

BollywoodReviews.propTypes = {
    heading: PropTypes.string,
        reviews: PropTypes.array,
}

BollywoodReviews.defaultProps = {
    heading: "Delivering Happiness!",
        reviews: [],
}

export default BollywoodReviews;