import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {setupStore} from "./components/redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore()
root.render(
    <Provider store={store}>
    <App />
    </Provider>

);


reportWebVitals();
