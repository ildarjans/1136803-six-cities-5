import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app';
import {Settings} from "./const";

const root = document.querySelector(`#root`);

ReactDOM.render(
    <App offersCount={Settings.OFFERS_COUNT}/>,
    root
);
