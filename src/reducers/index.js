import {combineReducers} from "redux";
import { routerReducer } from 'react-router-redux';

import lists from "./lists";
import cards from "./cards";

export const rootReducer = combineReducers({
    lists,
    cards,
    rooter: routerReducer,
});

