import React from "react";

import {Images} from "../../libs/constants";


const FixedButtonf = (props) => {
    return (
        <div className="auth-button">

            <div onClick={props.onClick} className="fixed-button-solo">

                {props.text}
            </div>


        </div>

    );
}
const Failure = (props) => {

    const resetStatus = (e) => {
        window.location.reload();
    }
    return (
        <div>
            <div className="failure-container">
                <img title="Fail Screen" src={Images.icons.failAuth} alt={Images.icons.failAuth}/>
                <div className="failure-message">{props.message} is not an authentic video code</div>
            </div>
            <FixedButtonf onClick={(e) => resetStatus(e)} text={"Try A Different Code"}/>
        </div>
    );

}

export default Failure;