import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { createBrowserHistory } from "history";

const root = ReactDOM.createRoot(document.getElementById('root'));
const history = createBrowserHistory();


root.render(
    <BrowserRouter history={history}>
        <App />
    </BrowserRouter>);

