import * as queryString from "query-string";
import ReactGA from "react-ga";

import {AndroidPlayStore, ApplePlayStore, languageOptions, languageUrls} from "./constants";
import {toast} from "react-toastify";


export const getLanguageTranslation = (object, key, language) => {
    let lang = languageOptions.filter(lang => lang.value === languageUrls[language])[0];
    let langKey = key + (lang ? lang.db_label : '');

    return object[langKey] || object[key]
};

export const truncChars = (text, length) => {
    if (text.length > length) {
        text = `${text.slice(0, length - 3)}...`;
    }
    return text;
};

export const getJSONParse = (string) => {
    return !!string ? JSON.parse(string) : {};
};

export const getSearchParams = (path) => {
    let values = path.split('?');
    return queryString.parse(`?${values[values.length - 1]}`);
};

export const getQueryString = (params) => {
    return Object.keys(params).map(key => key + '=' + params[key]).join('&');
};

export const getStorageItem = (key, defaultValue = null) => {
    try {
        return localStorage.getItem(key) || defaultValue
    } catch (e) {
        return defaultValue;
    }
};


export const setStorageItem = (key, value) => {
    try {
        return localStorage.setItem(key, value);
    } catch (e) {
        return null;
    }
};


export const removeStorageItem = (key) => {
    try {
        return localStorage.removeItem(key);
    } catch (e) {
        return null;
    }
};

export const scrollToTop = (scrollDuration) => {
    try {
        const scrollHeight = window.scrollY;
        const scrollStep = Math.PI / (scrollDuration / 15);
        const cosParameter = scrollHeight / 2;
        let scrollCount = 0;
        let scrollMargin;
        let scrollInterval = setInterval(function () {
            if (window.scrollY != 0) {
                scrollCount = scrollCount + 1;
                scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
                window.scrollTo(0, (scrollHeight - scrollMargin));
            } else clearInterval(scrollInterval);
        }, 15);

    } catch (e) {

    }
};


export const isDeviceMobile = () => {
    return window.matchMedia("(max-width: 767px)").matches;
}

export const validateMobile = (number) => {
    let numberRegex = /^[0-9]{10}$/g;
    return numberRegex.test(number);
}

export const getMobileOperatingSystem = () => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/windows phone/i.test(userAgent)) {
        return true;
    }
    if (/android/i.test(userAgent)) {
        return true;
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return false;
    } else {
        return true
    }
}

export const scrollToView = (id) => {
    let element = document.getElementById(id);
    if (!!element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 50;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
}

export const mobileStoreLink = (type) => {
    fbq('track', 'CompleteRegistration', {value: 0.00, currency: 'INR'});
    if (type === 'android') {
        window.open(AndroidPlayStore);
        branch.logEvent('download_android', "App store Apple");
        clevertap.event.push('Play store Android');
        ReactGA.event({action: 'Android', category: 'Play store website'});
    } else {
        window.open(ApplePlayStore);
        branch.logEvent('download_apple', "App store Apple");
        clevertap.event.push('App store Apple');
        ReactGA.event({action: 'Apple', category: 'Play store website'});
    }
}

export const randomizeShuffleArray = (array) => {
    return array.sort(() => .5 - Math.random());
}

export const copyText = (text) => {
    toast.dismiss();
    let copyText = text;
    let element = document.createElement("input");
    element.type = 'text';
    element.value = copyText;
    element.style.position = "fixed"; // Prevent MS edge scrolling.
    document.body.append(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    toast.success(`Copied: ${text}`,);
};

export const scrollIntoView = (e) => {
    e.target.scrollIntoView();
}