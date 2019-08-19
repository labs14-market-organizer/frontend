import axios from "axios";
import { axiosWithAuth } from "./../utls/axiosWithAuth";
import {HOST_URL} from "./../utls/hostUrl";
import {getUserData} from "./userData";
import { log } from "util";

import {SET_MARKET_DATA_END} from "./marketData"
export const GET_BOOTH_DATA_START = "GET_BOOTH_DATA_START";
export const GET_BOOTH_DATA_END = "GET_BOOTH_DATA_END";
export const SET_BOOTH_DATA_START = "SET_BOOTH_DATA_START";
export const SET_BOOTH_DATA_END = "SET_BOOTH_DATA_END";
export const ERROR_GET_BOOTH_DATA = "ERROR_GET_BOOTH_DATA";
export const ERROR_SET_BOOTH_DATA = "ERROR_SET_BOOTH_DATA";
export const ERROR_INVALID_TOKEN = "ERROR_INVALID_TOKEN";

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
export const createNewBooth = (marketid, booth) => dispatch => 
{
    dispatch({ type: SET_BOOTH_DATA_START });
    
    let token = localStorage.getItem("token");
    if(!token) {localStorage.clear(); return dispatch({ type: SET_BOOTH_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder
    
    //booth = cleanData(booth);
    if(booth.error) return dispatch({ type: ERROR_SET_BOOTH_DATA, payload: {error: booth.error} });
    booth = cleanData(booth);
    return axiosWithAuth(token)
    .post(`${HOST_URL}/markets/${marketid}/booths/`, booth)
    .then(res => {
        localStorage.removeItem("userData");//remove out of date data
        if(!res.data.booths) throw "no booths exist";
        if(res.data.booths.length < 1) throw "booth wasnt added to array (length is 0)"
        dispatch({type: SET_MARKET_DATA_END, payload: {marketData: res.data}});
        dispatch({type: SET_BOOTH_DATA_END, payload: {curentBooth: res.data.booths[res.data.booths.length-1]}}); //fire this first so we dont get GET_START fire before GET_END

        //getUserData(token); //fire another endpoint here so we can be quicker about gathering data
        return
    })
    .catch(err =>{
        //check if bad token if so clear local data
        console.error(err);
        dispatch({ type: ERROR_SET_BOOTH_DATA, payload: {error: err} });
    })
}

export const getBoothById = (boothId) => dispatch => 
{
    dispatch({ type: GET_BOOTH_DATA_START });    
    let token = localStorage.getItem("token");
    if(!token || !boothId || boothId < 1 || isNaN(boothId)) {localStorage.clear(); return dispatch({ type: SET_BOOTH_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder
    return axiosWithAuth(token)
    .get(`${HOST_URL}/booths/${boothId}`)
    .then(res => {
        dispatch({type: GET_BOOTH_DATA_END, payload: {curentBooth: res.data}});
    })
    .catch(err => {
        //check if bad token if so clear local data
        dispatch({type: ERROR_GET_BOOTH_DATA,  payload: {error: err}});
    })
}

export const updateBooth = (marketId, booth) => dispatch => 
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
}

export const deleteBooth = (boothId, marketId) => dispatch => 
{
    dispatch({ type: SET_BOOTH_DATA_START });
    let token = localStorage.getItem("token");
    if(!token || !boothId || boothId < 1 || isNaN(boothId)) {localStorage.clear(); return dispatch({ type: SET_BOOTH_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder
    return axiosWithAuth(token)
    .delete(`${HOST_URL}/markets/${marketId}/booths/${boothId}`)
    .then(res => {
        dispatch({type: SET_MARKET_DATA_END, payload: {marketData: res.data}});
        dispatch({type: SET_BOOTH_DATA_END, payload: {curentBooth: undefined}});
    })
    .catch(err => {
        //check if bad token if so clear local data
        dispatch({type: ERROR_GET_BOOTH_DATA,  payload: {error: err}});
    })
}


function cleanData(booth)
{
    let numcheck = (a) => isNaN(a) || parseInt(a) < 0 ? 0.0 : parseInt(a)
    let clean = 
    {
        name: booth.boothtype,
        number: booth.numberofbooths,
        price: numcheck(booth.boothprice * 100)/100,
        size: [numcheck(booth.length), numcheck(booth.width)], //always length x width
        description: booth.boothdescription ? booth.boothdescription : ""
    }
    return clean;
}