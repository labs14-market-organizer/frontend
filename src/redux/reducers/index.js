import { combineReducers } from "redux";
import {checkUserData } from "./userData";
import {checkBoothData} from "./boothData"
import {checkMarketData}from "./marketData";
import {reducer as reduxFormReducer} from 'redux-form';
import { checkVendorData } from "./vendorData";

export default combineReducers({
    //list reducers
    form: reduxFormReducer,
    checkUserData,
    checkMarketData,
<<<<<<< HEAD
    checkVendorData
=======
    checkBoothData                               
>>>>>>> 06b64f3d4e52164a1613908021a5d935592007ef
});