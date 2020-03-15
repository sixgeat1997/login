import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Route } from "react-router-dom";



ReactDOM.render(
    <Route>
        <App />
    </Route>,
    // <App/>,
    document.getElementById('root')
);
serviceWorker.unregister();
