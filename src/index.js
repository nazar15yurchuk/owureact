import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {Simpson} from "./components/Simpson/Simpson";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />,
    <Simpson/>
);



