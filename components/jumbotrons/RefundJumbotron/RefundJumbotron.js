import React, {useEffect, useState} from 'react';
import {withRouter} from "next/router";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";

import {isDeviceMobile} from "../../../libs/utils";
import {Images} from "../../../libs/constants";
import VideoPlayModal from "../../modals/VideoPlayModal";
import RefundCelebOptionsModal from "../../modals/RefundCelebOptionsModal";

import {createRefund} from "../../../redux/actions/refund";
import {usePrevious} from "../../../hooks";


let refundStatus = '';
let yesDescription = 'Thank you, your refund has been processed. It will reflect in your original source of payment within 5-7 business days. Once again, we express our deepest apologies for this unexpected situation.';
let noDescription = 'Your request has been received and changed. We will ensure your changed Video Message request is delivered at the earliest. Thank you for your continued patience and support. <br/> <br/> P.S. -: We are very sorry for the inconvenience caused!';
const RefundJumbotron = (props) => {
    let [state, setState] = useState({});
    let {videoSrc, changeCeleb} = state;
    let prevRefund = usePrevious(props.refund);

    useEffect(() => {
        let {refundStatus, refundVideoId} = props.router.query;
        let description = 'Hey there! <br/> <br/> We are extremely sorry to inform you that your Video Message request for Hrithik Roshan cannot be fulfilled. We deeply regret the inconvenience caused to you. You can either claim a 100% refund or if you wish, you can select another celebrity to record your Video Message. Once again, we express our deepest apologies.';
        if (refundStatus === 'yes') description = yesDescription;
        if (refundStatus === 'no') description = noDescription;
        setState({...state, description, videoSrc: '', showButtons: !refundStatus});
    }, []);

    useEffect(() => {
        let {isCreating, error, retry} = props.refund
        let {refundVideoId} = props.router.query;

        if (refundStatus === 'yes' && !isCreating && !!prevRefund.isCreating && !error && !retry) {
            props.router.push(`/refund/${refundVideoId}?refundStatus=yes`);
            setState({...state, description: yesDescription, showButtons: false});
        }
        if (refundStatus === 'no' && !isCreating && !!prevRefund.isCreating && !error && !retry) {
            props.router.push(`/refund/${refundVideoId}?refundStatus=no`);
            setState({...state, description: noDescription, showButtons: false, changeCeleb: false});
        }
    })

    const handlePlayVideo = () => {
        let videoSrc = 'https://truefan.in/celeb_fan_messup/Anticipation_%26_Replies_Mashup_02.mp4'
        if (isDeviceMobile()) videoSrc = 'https://truefan.in/celeb_fan_messup/Anticipation_%26_Replies_Mobile_version_02.mp4'
        setState({...state, videoSrc});
    }

    const handleOnYes = () => {
        refundStatus = 'yes';
        let {refundVideoId} = props.router.query;
        props.createRefund({id: refundVideoId, status: "yes"});
    }

    const handleSelectCeleb = (id) => {
        refundStatus = 'no';
        let {refundVideoId} = props.router.query;
        props.createRefund({id: refundVideoId, status: "no", celebId: id});
    }

    return (
        <section className="refund-jumbotron-container">
            {!!videoSrc && <VideoPlayModal show={!!videoSrc} src={videoSrc}
                                           handleClose={() => setState({...state, videoSrc: ''})}/>}
            {!!changeCeleb && <RefundCelebOptionsModal show={!!changeCeleb} onSubmit={handleSelectCeleb}
                                                       handleClose={() => setState({...state, changeCeleb: false})}/>}

            <video className="refund-jumbotron-video d-none d-md-block" autoPlay={true} muted loop playsInline>
                <source src={'https://truefan.in/celeb_fan_messup/Replies_Mashup_02_10secs.mp4'}
                        type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <video className="refund-jumbotron-video d-md-none" autoPlay={true} muted loop playsInline>
                <source src={'https://truefan.in/celeb_fan_messup/Replies_Mashup_Mobile_version_02_10secs.mp4'}
                        type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            <div className="refund-jumbotron">
                <div className="play-video-button" onClick={handlePlayVideo}>
                    <img title="Play Video" src={Images.icons.play} className="play-video-icon" alt={'Play video'}
                         loading="lazy"/>
                    <p className="play-video-text">Watch Full Video</p>
                </div>

                <div className="row flex-fill">
                    <div className="col-12 col-md-6 flex-fill d-flex flex-column">
                        <p className="refund-jumbotron-description flex-fill"
                           dangerouslySetInnerHTML={{__html: state.description}}/>

                        {!!state.showButtons && <div
                            className="mt-3 d-flex flex-column flex-md-row justify-content-center justify-content-md-start">
                            <Button className="custom-btn-primary minWidth100 mb-3"
                                    onClick={handleOnYes}>Yes, I want a Refund</Button>
                            <Button className="custom-btn-primary minWidth100 ml-md-3 mb-3"
                                    onClick={() => setState({...state, changeCeleb: true})}>
                                I want to change the celebrity</Button>
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    refund: state.refund,
});

const matchDispatchToProps = (dispatch) => bindActionCreators({
    createRefund,
}, dispatch);

export async function getStaticProps(context) {
    return {
        props: {},
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(RefundJumbotron));
