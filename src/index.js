import React from "react"
import ReactDOM from "react-dom"
import App from "./components/app/app.jsx"
import {Provider} from "react-redux";
import store from "./reducers/store";
import {HashRouter, BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>, document.getElementById(`root`)
);
