import axios from "axios";
import { axiosWithAuth } from "./../utls/axiosWithAuth";
import {HOST_URL} from "./../utls/hostUrl";
import {getUserData} from "./userData";

export const GET_MARKET_DATA_START = "GET_MARKET_DATA_START";
export const GET_MARKET_DATA_END = "GET_MARKET_DATA_END";
export const SET_MARKET_DATA_START = "SET_MARKET_DATA_START";
export const SET_MARKET_DATA_END = "SET_MARKET_DATA_END";
export const ERROR_GET_MARKET_DATA = "ERROR_GET_MARKET_DATA";
export const ERROR_SET_MARKET_DATA = "ERROR_SET_MARKET_DATA";
export const ERROR_INVALID_TOKEN = "ERROR_INVALID_TOKEN";

/*
object schema
market = 
{
	name: string,
	description: string,
	address: string,
	operation:
	[{
		name: string, //date type
		start: 
		end: 
	}]
	market_type(1,2): int (private,public),
	website: string,
	facebook: string
	image: string
}

*/
export const createNewMarket = (market) => dispatch => 
{
    dispatch({ type: SET_MARKET_DATA_START });
    console.log(market);
    let token = localStorage.getItem("token");
    if(!token) {localStorage.clear(); return dispatch({ type: SET_MARKET_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder
    
    market = cleanData(market);
    if(market.error) return dispatch({ type: ERROR_SET_MARKET_DATA, payload: {error: market.error} });

    return axiosWithAuth(token)
    .post(`${HOST_URL}`)
    .then(res => {
        localStorage.removeItem("userData");//remove out of date data
        dispatch({type: SET_MARKET_DATA_END, payload: {curentMarket: res.data}}); //fire this first so we dont get GET_START fire before GET_END
        getUserData(token); //fire another endpoint here so we can be quicker about gathering data
        return
    })
    .catch(err =>{
        //check if bad token if so clear local data
        dispatch({ type: ERROR_SET_MARKET_DATA, payload: {error: err} });
    })
}

export const getMarketById = (marketId) => dispatch => 
{
    dispatch({ type: GET_MARKET_DATA_START });    
    let token = localStorage.getItem("token");
    if(!token || !marketId || marketId < 1 || isNaN(marketId)) {localStorage.clear(); return dispatch({ type: SET_MARKET_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder
    return axiosWithAuth(token)
    .get(`${HOST_URL}/market/${marketId}`)
    .then(res => {
        dispatch({type: GET_MARKET_DATA_END, payload: {curentMarket: res.data}});
    })
    .catch(err => {
        //check if bad token if so clear local data
        dispatch({type: ERROR_GET_MARKET_DATA,  payload: {error: err}});
    })
}

export const updateMarket = (market) => dispatch => 
{
    dispatch({ type: GET_MARKET_DATA_START });
    let token = localStorage.getItem("token");
    if(!token || !market.id || market.id < 1 || isNaN(market.id)) {localStorage.clear(); return dispatch({ type: SET_MARKET_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder
    return axiosWithAuth(token)
    .put(`${HOST_URL}/market/${market.id}`)
    .then(res => {
        dispatch({type: SET_MARKET_DATA_END, payload: {curentMarket: res.data}});
    })
    .catch(err => {
        //check if bad token if so clear local data
        dispatch({type: ERROR_GET_MARKET_DATA,  payload: {error: err}});
    })
}

export const deleteMarket = (marketId) => dispatch => 
{
    dispatch({ type: SET_MARKET_DATA_START });
    let token = localStorage.getItem("token");
    if(!token || !marketId || marketId < 1 || isNaN(marketId)) {localStorage.clear(); return dispatch({ type: SET_MARKET_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder
    return axiosWithAuth(token)
    .put(`${HOST_URL}/market/${marketId}`)
    .then(res => {
        dispatch({type: SET_MARKET_DATA_END, payload: {curentMarket: undefined}});
    })
    .catch(err => {
        //check if bad token if so clear local data
        dispatch({type: ERROR_GET_MARKET_DATA,  payload: {error: err}});
    })
}

function cleanData(market)
{
    let clean = 
    {
        address: market.address,
        city: market.city,
        description: market.description,
        facebook: market.facebook,
        image: market.image,
        instagram: market.instagram,
        market_type: market.market_type,
        name: market.name,
        operation: market.operation,
        state: market.state,
        twitter: market.twitter,
        website: market.website,
        zipcode: market.zipcode
    }
    let required = ["address", "city", "description","state","zipcode"]
    let test = required.filter(x=> !clean[x] || clean[x].split(" ").join("") === "" || clean[x] === null);
    if(test.length > 0) return {error: `${test[0]} is a required field`};
    if(!clean.operation || clean.operation.length < 1) return {error: `must have at least one hour of operation`};
    if(isNaN(clean.zipcode) || clean.zipcode < 1000) return {error: `zipcode must be a real number`};

    return clean;
}