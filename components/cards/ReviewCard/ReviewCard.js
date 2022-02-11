import React, {useState} from 'react';
import StarRatings from "react-star-ratings";
import PropTypes from "prop-types";
import {getLanguageTranslation} from "../../../libs/utils";
import VideoPlayModal from "../../modals/VideoPlayModal";
import {withRouter} from "next/router";


const ReviewCard = (props) => {
    const [videoSrc, setVideoSrc] = useState('')
    let {review} = props;
    const {query: {reviewsLang}} = props.router;

    return (
        <div className="review-card-container">
            {!!videoSrc && <VideoPlayModal show={!!videoSrc} src={videoSrc}
                                           handleClose={() => setVideoSrc('')}/>}

            <img title={getLanguageTranslation(review, 'review', reviewsLang)} 
                 className="review-card-video-thumbnail" src={review.thumbnail} alt="video thumbnail"
                 onClick={() => setVideoSrc(review.videoUrl)}/>
            <div className="review-card-details">
                <img title={getLanguageTranslation(review, 'winnerName', reviewsLang)} 
                     className="review-card-user-thumbnail" src={review.thumbnailUser} alt="user image"/>
                <div className="review-card-user">
                    <div className="review-card-user-name">
                        <span>{getLanguageTranslation(review, 'winnerName', reviewsLang)}</span>
                        <StarRatings rating={5} starRatedColor="#FDD643" numberOfStars={5} starDimension="16px"
                                     starSpacing="0"/>
                    </div>
                    <p className="review-card-description">
                        {getLanguageTranslation(review, 'review', reviewsLang)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps(context) {
    return {
        props: {},
    }
}

ReviewCard.propTypes = {
    review: PropTypes.object,
};

ReviewCard.defaultProps = {
    review: {},
};

export default React.memo(withRouter(ReviewCard));
