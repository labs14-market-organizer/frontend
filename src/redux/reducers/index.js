import { combineReducers } from "redux";
import {checkUserData } from "./userData";
import {checkMarketData} from "./marketData"
import {checkBoothData} from "./boothData"

export default combineReducers({
    //list reducers
    checkUserData,
    checkBoothData
});