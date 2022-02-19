// import {HOST} from '../constants'
import makeRequest from "./makeRequest";
import {getQueryString} from "../../libs/utils";

const HOST = process.env.HOST

export const jsonToForm = (data) => {
    const form = new FormData();
    const keys = Object.keys(data);
    const values = Object.values(data);

    keys.map((key, i) => {
        form.append(key, values[i])
    });
    return form;
};


export default {
    security: {
        getAppConfig: (data) => (makeRequest(
            `${HOST}/security/api/getAppConfig`,
            {method: 'GET'}, false
        )),
        addBirthday: (data) => (makeRequest(
            `${HOST}/security/api/auth/add-birthday-web`,
            {method: 'POST', bodyType: 'json', body: JSON.stringify(data)}, false
        )),
    },
    refund: {
        refundRequest: ({id, ...data}) => (makeRequest(
            `${HOST}/celeb/api/video-request/refund-request/${id}?${getQueryString(data)}`,
            {method: 'POST'}, false
        )),
    },

    authenticator:{
        authenticateCode:
        (otp)=>(makeRequest(
            `${HOST}/celeb/api/auth/user/verify-video-authentication?authenticationToken=${otp}`,
            {method: 'GET'}, false
        )),
     }
}
