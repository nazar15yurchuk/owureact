import React from 'react';
import ReactDOM from 'react-dom/client';
import {setupStore} from "./redux";
import {Provider} from "react-redux";
import {unstable_HistoryRouter as BrowserRouter} from "react-router-dom";
import {history} from "./services"

import {App} from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

let store = setupStore();

root.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App/>
        </BrowserRouter>
    </Provider>
);

