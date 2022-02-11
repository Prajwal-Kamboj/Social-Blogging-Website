import React from "react";
import * as PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import Modal from 'react-bootstrap/Modal';
import moment from "moment";


class DateSelectModal extends React.Component {

    static propTypes = {
        show: PropTypes.bool,
        date: PropTypes.any,
        handleClose: PropTypes.func,
        handleSubmit: PropTypes.func,
    };

    static defaultProps = {
        show: false,
        handleClose: () => {
        },
        handleSubmit: () => {
        },
    };

    constructor(props) {
        super(props);
        let {date} = props;
        this.state = {
            startDate: !!date ? new Date(date) : new Date(),
        };
    }

    componentDidMount() {
    }


    handleChangeDate = (date) => {
        this.setState({startDate: date});
    }

    handleSubmit = () => {
        let {handleSubmit, handleClose} = this.props;
        let {startDate} = this.state;
        handleClose();
        handleSubmit(startDate);
    }

    render() {
        let {show, handleClose} = this.props;
        let {startDate} = this.state;

        return (
            <Modal className="date-select-modal" size="sm" show={show} onHide={handleClose} centered backdrop="static"
                   keyboard={false}>
                <Modal.Body>
                    <div className="date-select-header">
                        <p className="date-select-header-year">{moment(startDate).format('yyyy')}</p>
                        <p className="date-select-header-date">{moment(startDate).format('ddd, MMM DD')}</p>
                    </div>
                    <DatePicker selected={startDate} inline onChange={this.handleChangeDate}/>
                    <div className="date-select-actions">
                        <span className="date-select-action mr-4" onClick={handleClose}>CANCEL</span>
                        <span className="date-select-action" onClick={this.handleSubmit}>OK</span>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}

export default DateSelectModal;