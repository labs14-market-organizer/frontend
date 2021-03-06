import { combineReducers } from "redux";
import {checkUserData } from "./userData";
import {checkBoothData} from "./boothData"
import {checkMarketData}from "./marketData";
import {reducer as reduxFormReducer} from 'redux-form';
import { checkVendorData } from "./vendorData";
import { checkMarketsByArea } from "./searchMarkets";
import { checkBoothReserve } from "./boothReserve";

export default combineReducers({
    //list reducers
    form: reduxFormReducer,
    checkUserData,
    checkMarketData,
    checkVendorData,
    checkBoothData,                   
    checkMarketsByArea,
    checkBoothReserve
});

