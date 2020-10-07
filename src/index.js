import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {DisplaySettings} from "./const";

const root = document.querySelector(`#root`);

ReactDOM.render(
    <App offersCount={DisplaySettings.OFFERS_COUNT}/>,
    root
);
