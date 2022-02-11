import React, {useEffect} from "react";
import * as PropTypes from "prop-types";
import Modal from 'react-bootstrap/Modal';

let videoRef = '';
const VideoPlayModal = (props) => {

    let {show, handleClose, src} = props;

    useEffect(() => {
        videoRef.play();
    }, [])

    return (
        <Modal className="video-play-modal" size="lg" show={show} onHide={handleClose} centered>
            <Modal.Header closeButton/>
            <Modal.Body>
                <video ref={(r) => videoRef = r}
                       className="video-play" controls playsInline>
                    <source src={src} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </Modal.Body>
        </Modal>
    )
}

VideoPlayModal.propTypes = {
    src: PropTypes.string,
    show: PropTypes.bool,
    handleClose: PropTypes.func,
};

VideoPlayModal.defaultProps = {
    src: 'https://truefan.in/celeb_fan_messup/Anticipation_%26_Replies_Mashup_02.mp4',
    show: false,
    handleClose: () => {
    },
};

export default React.memo(VideoPlayModal);