import React, {useEffect} from "react";
import {Images} from "../../libs/constants";

const Success = ({data}) => {
    var d = new Date(data.deliveredOn);
    const options = {year: 'numeric', month: 'long', day: 'numeric'};

    useEffect(() => {
        // console.log("data", data)
        // console.log(d.toLocaleDateString('en-US', options))

    }, [])
    return (
        <div className="success-container">
            <section className="success">
                <img title="Bollywood Actors Image" className="success-image d-md-none" src={data.celebImageUrl}
                     alt={data.celebImageUrl}/>
            </section>
            <div className="text-primary message" style={{fontSize: "18px"}}>
                <img title="Star Success" src={Images.icons.starSuccess} alt={Images.icons.starSuccess}/>

                <div className="message-text">
                    100% Authentic Video Message
                </div>
            </div>
            <div className="border-line">

            </div>

            <ul className="text-primary">
                <li>
                    <div className="left">
                        Name Recorded By
                    </div>
                    <div className="right">
                        {data.recordedBy}
                    </div>
                </li>
                <li>
                    <div className="left">
                        Recorded For
                    </div>
                    <div className="right">
                        {data.recordedFor}
                    </div>
                </li>
                <li>
                    <div className="left">
                        Delivered On
                    </div>
                    <div className="right">
                        {d.toLocaleDateString('en-US', options)}
                    </div>
                </li>
                <li>
                    <div className="left">
                        Delivered To
                    </div>
                    <div className="right">
                        +91 {data.mobileNumber}
                    </div>
                </li>
            </ul>
        </div>

    );

}

export default Success;