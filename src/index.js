import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import {searchRobots} from "./reducers";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './containers/App/App'
import 'tachyons';



const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace:true
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const store = createStore(searchRobots, composeEnhancers())

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
