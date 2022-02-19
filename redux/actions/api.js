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
    
}
