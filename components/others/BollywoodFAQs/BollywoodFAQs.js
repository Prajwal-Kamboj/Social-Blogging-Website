import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";


export default class BollywoodFAQs extends PureComponent {
    static propTypes = {
        heading: PropTypes.string,
        faqs: PropTypes.array,
    };

    static defaultProps = {
        heading: "Got A Question?",
        faqs: [],
    };

    constructor(props) {
        super(props);
        this.state = {
            activeKey: '0'
        };
    }

    handleSelectAccordion = (e) => {
        this.setState({activeKey: e});
    }

    render() {
        let {heading, faqs} = this.props;
        let {activeKey} = this.state;

        return (
            <section className="bollywood-faqs">
                <div className="container">
                    <h2 className="section-heading px-3">{heading}</h2>
                    <div className="row">
                        <div className="col-12">
                            <Accordion defaultActiveKey="0" onSelect={this.handleSelectAccordion}>
                                {faqs.map((faq, index) =>
                                    <Card key={index + 1}>
                                        <Accordion.Toggle className={activeKey === `${index}` ? 'active' : ''}
                                                          as={Card.Header} eventKey={`${index}`}>
                                            {faq.ques} <i className="fas fa-chevron-down"/>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey={`${index}`}>
                                            <Card.Body><span
                                                dangerouslySetInnerHTML={{__html: faq.ans}}/></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                )}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
