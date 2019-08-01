import axios from "axios";
import { axiosWithAuth } from "./../utls/axiosWithAuth";
import {HOST_URL} from "./../utls/hostUrl";
import {getUserData} from "./userData";

export const GET_BOOTH_DATA_START = "GET_BOOTH_DATA_START";
export const GET_BOOTH_DATA_END = "GET_BOOTH_DATA_END";
export const SET_BOOTH_DATA_START = "SET_BOOTH_DATA_START";
export const SET_BOOTH_DATA_END = "SET_BOOTH_DATA_END";
export const ERROR_GET_BOOTH_DATA = "ERROR_GET_BOOTH_DATA";
export const ERROR_SET_BOOTH_DATA = "ERROR_SET_BOOTH_DATA";
export const ERROR_INVALID_TOKEN = "ERROR_INVALID_TOKEN";

/*
object schema
*/
export const createNewBooth = (booth) => dispatch => 
{
    dispatch({ type: SET_BOOTH_DATA_START });
    
    let token = localStorage.getItem("token");
    if(!token) {localStorage.clear(); return dispatch({ type: SET_BOOTH_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder
    
    //booth = cleanData(booth);
    if(booth.error) return dispatch({ type: ERROR_SET_BOOTH_DATA, payload: {error: booth.error} });
    booth.id = 1;
    console.log(booth);
    dispatch({type: SET_BOOTH_DATA_END, payload: {boothData: booth}})
    return;
    return axiosWithAuth(token)
    .post(`${HOST_URL}/booths/`, booth)
    .then(res => {
        localStorage.removeItem("userData");//remove out of date data
        dispatch({type: SET_BOOTH_DATA_END, payload: {curentBooth: res.data}}); //fire this first so we dont get GET_START fire before GET_END
        getUserData(token); //fire another endpoint here so we can be quicker about gathering data
        return
    })
    .catch(err =>{
        //check if bad token if so clear local data
        dispatch({ type: ERROR_SET_BOOTH_DATA, payload: {error: err} });
    })
}

export const getBoothById = (boothId) => dispatch => 
{
    dispatch({ type: GET_BOOTH_DATA_START });    
    let token = localStorage.getItem("token");
    if(!token || !boothId || boothId < 1 || isNaN(boothId)) {localStorage.clear(); return dispatch({ type: SET_BOOTH_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder
    return axiosWithAuth(token)
    .get(`${HOST_URL}/booth/${boothId}`)
    .then(res => {
        dispatch({type: GET_BOOTH_DATA_END, payload: {curentBooth: res.data}});
    })
    .catch(err => {
        //check if bad token if so clear local data
        dispatch({type: ERROR_GET_BOOTH_DATA,  payload: {error: err}});
    })
}

export const updateBooth = (booth) => dispatch => 
{
    dispatch({ type: GET_BOOTH_DATA_START });
    let token = localStorage.getItem("token");
    if(!token || !booth.id || booth.id < 1 || isNaN(booth.id)) {localStorage.clear(); return dispatch({ type: SET_BOOTH_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder
    return axiosWithAuth(token)
    .put(`${HOST_URL}/booth/${booth.id}`)
    .then(res => {
        dispatch({type: SET_BOOTH_DATA_END, payload: {curentBooth: res.data}});
    })
    .catch(err => {
        //check if bad token if so clear local data
        dispatch({type: ERROR_GET_BOOTH_DATA,  payload: {error: err}});
    })
}

export const deleteBooth = (boothId) => dispatch => 
{
    dispatch({ type: SET_BOOTH_DATA_START });
    let token = localStorage.getItem("token");
    if(!token || !boothId || boothId < 1 || isNaN(boothId)) {localStorage.clear(); return dispatch({ type: SET_BOOTH_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder
    return axiosWithAuth(token)
    .put(`${HOST_URL}/booth/${boothId}`)
    .then(res => {
        dispatch({type: SET_BOOTH_DATA_END, payload: {curentBooth: undefined}});
    })
    .catch(err => {
        //check if bad token if so clear local data
        dispatch({type: ERROR_GET_BOOTH_DATA,  payload: {error: err}});
    })
}

function cleanData(booth)
{
    let clean = 
    {
        type: booth.boothtype,
        booths: booth.numberofbooths,
        price: booth.boothprice,
        length: booth.length,
        width: booth.width,
        description: booth.boothdescription
    }
    return clean;
}