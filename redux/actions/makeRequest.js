import {getStorageItem} from "../../libs/utils";

export const USER = 'user';
export const ACCESS = 'web_access';

const makeRequest = async (path, allParams = {}, allowAuth = true) => {
    let headers = {};
    const access = await getStorageItem(ACCESS);
    let {bodyType = 'form', ...params} = allParams;

    if (!!access && !!allowAuth) {
        headers = {...headers, 'Authorization': `Bearer ${access}`};
    }

    if (bodyType === 'json') {
        headers = {...headers, 'Content-Type': 'application/json'};
    } else if (bodyType === 'file') {
        headers = {...headers, 'Content-Type': 'multipart/form-data'};
    }

    if (params.headers) {
        headers = {...params.headers, ...headers};
    }
    const fetchParams = {
        ...params,
        headers,
    };

    return await fetch(path, fetchParams);
};

export default makeRequest;
