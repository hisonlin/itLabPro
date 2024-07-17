import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

//import for redux
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers"
import {thunk} from "redux-thunk";
import {BrowserRouter} from "react-router-dom";

const reduxStore = createStore(reducers, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={reduxStore}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
);
