import React from "react";
import * as PropTypes from "prop-types";
import Modal from 'react-bootstrap/Modal';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {REFUND_CELEB_OPTIONS} from "../../../libs/constants";
import {getJSONParse} from "../../../libs/utils";
import Button from "react-bootstrap/Button";
import {withRouter} from "next/router";


class RefundCelebOptionsModal extends React.Component {

    static propTypes = {
        show: PropTypes.bool,
        handleClose: PropTypes.func,
        onSubmit: PropTypes.func
    };

    static defaultProps = {
        show: false,
        handleClose: () => {
        },
        onSubmit: () => {
        },
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
    }


    render() {
        let {show, handleClose, config, onSubmit} = this.props;
        let {celebId} = this.state;
        let celebIds = getJSONParse(config.data.celeb_config);

        return (
            <Modal className="refund-celeb-options-modal" size="md" show={show} onHide={handleClose}
                   centered backdrop="static" keyboard={false}>
                <Modal.Header>Please select a celebrity</Modal.Header>
                <Modal.Body>
                    <div className="refund-celeb-options">
                        <ul className="list-unstyled mb-0">
                            {REFUND_CELEB_OPTIONS.map((celeb) => (
                                <li className={`refund-celeb-option ${celebIds[celeb.value] === celebId ? 'active' : ''}`}
                                    key={celeb.value} onClick={() => this.setState({celebId: celebIds[celeb.value]})}>
                                    {celeb.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="custom-btn-primary mr-3 py-1" onClick={handleClose}>Close</Button>
                    <Button className="custom-btn-primary py-1" disabled={!celebId} onClick={() => onSubmit(celebId)}
                    >Submit</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}


const mapStateToProps = (state) => ({
    config: state.security.config,
});

const matchDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(RefundCelebOptionsModal));