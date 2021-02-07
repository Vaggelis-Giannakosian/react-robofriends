import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import {createLogger} from "redux-logger";
import thunkMiddleware from 'redux-thunk'
import {searchRobots, requestRobots} from "./reducers";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './containers/App/App'
import 'tachyons';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware, logger),
    // other store enhancers if any
);

// const store = createStore(searchRobots,applyMiddleware(logger))

const rootReducer = combineReducers({searchRobots,requestRobots})
const store = createStore(rootReducer, enhancer)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export type AppState = ReturnType<typeof rootReducer>;
