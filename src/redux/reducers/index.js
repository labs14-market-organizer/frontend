import { combineReducers } from "redux";
import {checkUserData } from "./userData";
import {checkMarketData}from "./marketData";

export default combineReducers({
    //list reducers
    checkUserData,
    checkMarketData
});