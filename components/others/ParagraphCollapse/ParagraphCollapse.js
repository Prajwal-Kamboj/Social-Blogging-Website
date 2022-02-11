import React, {useState} from "react";
import Collapse from "react-bootstrap/Collapse";
import PropTypes from "prop-types";

function ParagraphCollapse(props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="container paragraph-collapse-container">
            <p className="mb-0">
                <span dangerouslySetInnerHTML={{__html: props.text}}/>
                {!open && <strong aria-controls="paragraph-collapse" aria-expanded={open} className="read-more-less"
                                  onClick={() => setOpen(!open)}>... Read More</strong>}
            </p>
            <Collapse in={open}>
                <p id="paragraph-collapse">
                    <span dangerouslySetInnerHTML={{__html: props.collapsedText}}/>&nbsp;
                    <strong aria-controls="paragraph-collapse" aria-expanded={open} className="read-more-less"
                            onClick={() => setOpen(!open)}>Read Less</strong>
                </p>
            </Collapse>
        </div>
    );
}

ParagraphCollapse.propTypes = {
    text: PropTypes.string,
    collapsedText: PropTypes.string,
};

ParagraphCollapse.defaultProps = {
    text: '',
    collapsedText: '',
};

export default React.memo(ParagraphCollapse);