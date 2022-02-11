import ReactGA from "react-ga";
import {wrapper} from "../redux/store";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/scss/main.scss';



ReactGA.initialize('UA-176063167-1');

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({Component, pageProps}) => {
    return <>
        <Component {...pageProps} />
    </>
}

export default wrapper.withRedux(MyApp);