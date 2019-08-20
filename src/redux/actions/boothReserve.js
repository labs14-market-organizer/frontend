import axios from "axios";
import { axiosWithAuth } from "./../utls/axiosWithAuth";
import {HOST_URL} from "./../utls/hostUrl";
import {getUserData} from "./userData";
import { log } from "util";

import { GET_USER_DATA_END, GET_USER_DATA_START } from "./userData"
export const GET_BOOTH_DATA_START = "GET_BOOTH_DATA_START";
export const GET_BOOTH_DATA_END = "GET_BOOTH_DATA_END";
export const SET_BOOTH_DATA_START = "SET_BOOTH_DATA_START";
export const SET_BOOTH_DATA_END = "SET_BOOTH_DATA_END";
export const ERROR_GET_BOOTH_DATA = "ERROR_GET_BOOTH_DATA";
export const ERROR_SET_BOOTH_DATA = "ERROR_SET_BOOTH_DATA";
export const ERROR_INVALID_TOKEN = "ERROR_INVALID_TOKEN";
export const GET_VENDORS_WHO_RENTED = "GET_VENDORS_WHO_RENTED";

/*
object schema
{
    "type": string,
    "number": number,
    "price": string,
    "size": string,
    "description": sting
 }
*/
export const createReservation = (marketId, boothId, date) => dispatch => 
{
    dispatch({ type: SET_BOOTH_DATA_START });
    
    let token = localStorage.getItem("token");
    if(!token) {localStorage.clear(); return dispatch({ type: SET_BOOTH_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder
    return axiosWithAuth(token)
    .post(`${HOST_URL}/markets/${marketId}/booths/${boothId}/reserve`, {reserve_date: date})
    .then(res =>{
        setTimeout(() => 
            axiosWithAuth(token)
            .get(`${HOST_URL}/user`)
            .then(res => {
                if(!res.data) throw "interal client error";
                let userType = "undefined";
                try { 
                    userType = res.data.markets.length > 0 ? "Market Owner" : res.data.vendors.length > 0 ? "Vendor" : "undefined" 
                    if(res.data.markets && res.data.markets.length > 0) dispatch({ type: "SET_MARKET_DATA_END", payload: {marketData: res.data.markets[0]} });
                    else if(res.data.vendors && res.data.vendors.length > 0) dispatch({ type: "SET_VENDOR_DATA_END", payload: {vendorData: res.data.vendors[0]} });
                }catch{}
                localStorage.setItem("token", token);
                
                dispatch({type: GET_USER_DATA_END, payload: {token, userData: res.data, userType}});
                axiosWithAuth(token)
                    .get(`${HOST_URL}/markets/${marketId}/booths/date/${date}`)
                    .then(res4 => {
                        dispatch({type: GET_BOOTH_DATA_END, payload: {reserveData: res4.data}});
                    })
            })
            .catch(err => { getError(dispatch, ERROR_GET_BOOTH_DATA,  err); }), 
        1);
    })
    .then(res => {
        return axiosWithAuth(token)
        .get(`${HOST_URL}/markets/${marketId}/vendors/date/${date}`)
        .then(res1 => {
            dispatch({ type: GET_VENDORS_WHO_RENTED, payload: res1.data })
        })
        .catch(err => {
            getError(dispatch, ERROR_GET_BOOTH_DATA,  err);
        })
    })
    .catch(err =>{
        //check if bad token if so clear local data
        getError(dispatch, ERROR_SET_BOOTH_DATA,  err);
    })
}

export const getBoothReservations = (marketId, date, force=false) => dispatch => 
{
    if(!force)dispatch({ type: GET_BOOTH_DATA_START });    
    let token = localStorage.getItem("token");
    if(!token) {localStorage.clear(); return dispatch({ type: SET_BOOTH_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder

    return axiosWithAuth(token)
    .get(`${HOST_URL}/markets/${marketId}/booths/date/${date}`)
    .then(res => {
        dispatch({type: GET_BOOTH_DATA_END, payload: {reserveData: res.data}});
    })
    .catch(err => {
        //check if bad token if so clear local data
        let error = err && err.response && err.response.data && err.response.data.message ? err.response.data.message : "Unable to contact server. Please Try again."
        dispatch({type: ERROR_GET_BOOTH_DATA,  payload: {error: error}});
    })
}

/* export const updateBooth = (marketId, booth) => dispatch => 
{
    dispatch({ type: GET_BOOTH_DATA_START });
    let token = localStorage.getItem("token");
    if(!token || !booth.id || booth.id < 1 || isNaN(booth.id)) {localStorage.clear(); return dispatch({ type: SET_BOOTH_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder
    let boothId = booth.id;
    booth = cleanData(booth);
    return axiosWithAuth(token)
    .put(`${HOST_URL}/markets/${marketId}/booths/${boothId}`, booth)
    .then(res => {
        dispatch({type: SET_MARKET_DATA_END, payload: {marketData: res.data}});
        dispatch({type: SET_BOOTH_DATA_END, payload: {curentBooth: res.data.booths[res.data.booths.length-1]}});
    })
    .catch(err => {
        //check if bad token if so clear local data
        dispatch({type: ERROR_GET_BOOTH_DATA,  payload: {error: err}});
    })
} */

export const deleteBoothReservation = (reservationId, boothId, marketId, date) => dispatch => 
{
    dispatch({ type: SET_BOOTH_DATA_START });
    dispatch({ type: GET_USER_DATA_START });
    let token = localStorage.getItem("token");
    if(!token || !boothId || boothId < 1 || isNaN(boothId)) {localStorage.clear(); return dispatch({ type: SET_BOOTH_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder


    return axiosWithAuth(token)
    .delete(`${HOST_URL}/markets/${marketId}/booths/${boothId}/reserve/${reservationId}`)
    .then(res2 => {
        setTimeout(() => 
            axiosWithAuth(token)
            .get(`${HOST_URL}/user`)
            .then(res => {
                if(!res.data) throw "interal client error";
                let userType = "undefined";
                try { 
                    userType = res.data.markets.length > 0 ? "Market Owner" : res.data.vendors.length > 0 ? "Vendor" : "undefined" 
                    if(res.data.markets && res.data.markets.length > 0) dispatch({ type: "SET_MARKET_DATA_END", payload: {marketData: res.data.markets[0]} });
                    else if(res.data.vendors && res.data.vendors.length > 0) dispatch({ type: "SET_VENDOR_DATA_END", payload: {vendorData: res.data.vendors[0]} });
                }catch{}
                localStorage.setItem("token", token);
                
                dispatch({type: GET_USER_DATA_END, payload: {token, userData: res.data, userType}});
                axiosWithAuth(token)
                    .get(`${HOST_URL}/markets/${marketId}/booths/date/${date}`)
                    .then(res4 => {
                        dispatch({type: GET_BOOTH_DATA_END, payload: {reserveData: res4.data}});
                    })
            }),
           
        1);
       
    }) 
    .then(res => {
        return axiosWithAuth(token)
        .get(`${HOST_URL}/markets/${marketId}/vendors/date/${date}`)
        .then(res1 => {
            dispatch({ type: GET_VENDORS_WHO_RENTED, payload: res1.data })
            
        })
        .catch(err => {
            getError(dispatch, ERROR_GET_BOOTH_DATA,  err);
        })
    })
    .catch(err => {getError(dispatch, ERROR_GET_BOOTH_DATA,  err) })
    .catch(err => {
        getError(dispatch, ERROR_GET_BOOTH_DATA,  err);
    })
}

export const requestReservationPermissions = (marketId) => dispatch => 
{
    dispatch({ type: SET_BOOTH_DATA_START });
    dispatch({ type: GET_USER_DATA_START });
    let token = localStorage.getItem("token");
    if(!token || !marketId || marketId < 1 || isNaN(marketId)) {localStorage.clear(); return dispatch({ type: SET_BOOTH_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder
    
    return axiosWithAuth(token)
        .post(`${HOST_URL}/markets/${marketId}/request`,{})
        .then(res2 => {
            setTimeout(() => 
                axiosWithAuth(token)
                .get(`${HOST_URL}/user`)
                .then(res => {
                    if(!res.data) throw "interal client error";
                    let userType = "undefined";
                    try { 
                        userType = res.data.markets.length > 0 ? "Market Owner" : res.data.vendors.length > 0 ? "Vendor" : "undefined" 
                        if(res.data.markets && res.data.markets.length > 0) dispatch({ type: "SET_MARKET_DATA_END", payload: {marketData: res.data.markets[0]} });
                        else if(res.data.vendors && res.data.vendors.length > 0) dispatch({ type: "SET_VENDOR_DATA_END", payload: {vendorData: res.data.vendors[0]} });
                    }catch{}
                    localStorage.setItem("token", token);
                    
                    dispatch({type: GET_USER_DATA_END, payload: {token, userData: res.data, userType}});
                    dispatch({type: GET_BOOTH_DATA_END, payload: {}});
                })
                .catch((err)=>{getError(dispatch, ERROR_GET_BOOTH_DATA,  err);})
            , 1);
        })
        .catch(err => {
            getError(dispatch, ERROR_GET_BOOTH_DATA,  err);
        })
}

export const getVendorsWhoRented = (marketId, date, force = false) => dispatch => {
    if(!force)dispatch({ type: GET_BOOTH_DATA_START });
    let token = localStorage.getItem("token")
    if(!token) {localStorage.clear(); return dispatch({ type: SET_BOOTH_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder

    return axiosWithAuth(token)
        .get(`${HOST_URL}/markets/${marketId}/vendors/date/${date}`)
        .then(res => {
            dispatch({ type: GET_VENDORS_WHO_RENTED, payload: res.data })
        })
        .catch(err => {
            getError(dispatch, ERROR_GET_BOOTH_DATA,  err);
        })
};

const getError = (dis,type,err) =>
{
    err = err && err.response && err.response.data && err.response.data ? err.response.data : "Unable to contact server. Please Try again."
    dis({type: type, payload: err})
}