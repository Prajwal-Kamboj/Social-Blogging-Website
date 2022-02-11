import React from 'react';
import {Images} from "../../libs/constants";


const FeaturedIn = (props) => {

    return (
        <div className="featured-in-container">
            <h2 className="feature-heading">Featured In </h2>
            <div className="col-12">
                <div className="feature-icon mb-4">
                    <img title="Daily Hunt" src={Images.icons.dailyHunt} 
                         className="feature-icon-image feature-icon-dh" width="100%" height="100%"
                         alt={Images.icons.dailyHunt}/>
                    <img title="BW BUSINESSWORLD" src={Images.icons.BW} className="feature-icon-image feature-icon-BW"
                         alt={Images.icons.BW}  width="100%" height="100%"/>
                    <img title="Your Story" src={Images.icons.yourStory} className="feature-icon-image feature-icon-ys"
                         alt={Images.icons.yourStory}  width="100%" height="100%"/>
                </div>
                <div className="feature-icon pt-3 pt-md-5">
                    <img title="The Economic Times" src={Images.icons.economicTimes} 
                         className="feature-icon-image large-icon" alt={Images.icons.economicTimes} width="100%"
                         height="100%"/>
                    <img title="Financial Express" src={Images.icons.financialExpress} 
                         className="feature-icon-image large-icon" alt={Images.icons.financialExpress} width="100%"
                         height="100%"/>
                    <img title="VC Circle" src={Images.icons.vcCircle} className="feature-icon-image feature-icon-vc"
                         alt={Images.icons.vcCircle}  width="100%" height="100%"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1 px-xl-5">
                    <div className="row stats-number-container">
                        <div className="col stats-number-col">
                            <div className="grey-container">
                                <div className="stats-number text-center">10,000+</div>
                                <div className="stats-info text-center text-secondary">Video Messages Delivered</div>
                            </div>
                        </div>
                        <div className="col stats-number-col">
                            <div className="grey-container">
                                <div className="stats-number text-center">10 Lakh+</div>
                                <div className="stats-info text-center">TrueFans</div>
                            </div>
                        </div>
                        <div className="col stats-number-col">
                            <div className="grey-container">
                                <div className="stats-number text-center">Biggest</div>
                                <div className="stats-info text-center">Bollywood Celebrities</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default React.memo(FeaturedIn);