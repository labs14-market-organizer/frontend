import { axiosWithAuth } from "./../utls/axiosWithAuth";
import {HOST_URL} from "./../utls/hostUrl";

export const GET_VENDORS_WHO_RENTED_BY_MARKET = "GET_VENDORS_WHO_RENTED_BY_MARKET";

export const getVendorsWhoRentedByMarket = (marketId, date) => dispatch => {
    let token = localStorage.getItem("token")
    // if(!token) {localStorage.clear(); return dispatch({ type: SET_BOOTH_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder

    return axiosWithAuth(token)
        .get(`${HOST_URL}/markets/${marketId}/vendors/date/${date}`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: GET_VENDORS_WHO_RENTED_BY_MARKET, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            // getError(dispatch, ERROR_GET_BOOTH_DATA,  err);
        })
};