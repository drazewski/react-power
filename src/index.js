import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {Provider} from "react-redux";
import {store} from "./store/index";

import 'normalize.css';
import './index.css';
import 'font-awesome/css/font-awesome.css';

// if (process.env.NODE_ENV !== 'production') {
//     const {whyDidYouUpdate} = require('why-did-you-update');
//     whyDidYouUpdate(React);
// }

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));