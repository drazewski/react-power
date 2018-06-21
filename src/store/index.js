import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "../reducers/index";
import createSocketIoMiddleware from 'redux-socket.io';
 import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import io from 'socket.io-client';
import { routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas/index';


let socket = io('http://localhost:3001');
let socketIoMiddleware = createSocketIoMiddleware(socket, "SERVER/");

export const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();


export const store = createStore(
    rootReducer,
   // initialState,
    composeWithDevTools(applyMiddleware(socketIoMiddleware, routeMiddleware, thunkMiddleware, sagaMiddleware)),
);

if (process.env.NODE_ENV !== 'production') {
    window.Perf = require('react-addons-perf');
}

sagaMiddleware.run(rootSaga);
