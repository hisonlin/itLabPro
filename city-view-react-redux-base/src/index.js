import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {createRoot} from "react-dom/client";

//import for redux
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers"
import {thunk} from "redux-thunk";

const reduxStore = createStore(reducers, applyMiddleware(thunk))

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
);

