import { axiosWithAuth } from "./../utls/axiosWithAuth";
import {HOST_URL} from "./../utls/hostUrl";
// import {getUserData} from "./userData";

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
    
    address: string, //broken down at this point
    description: string,
    facebook: string
    //image: string not in use
    market_type(1,2): int (private,public),
	name: string,
	operation:
	[{
		name: string, //date type
		start: 
		end: 
	}],
	website: string,
}


{
    "name": string,
    "description": string,
    "electricity": Bool,
    "facebook": string,
    "instagram": string,
    "items": null,
    "loud": Bool,
    "other_special": string,
    "twitter": string,
    "ventilation": Bool,
    "website": url
  }
*/
export const createNewMarket = (market) => dispatch => 
{
    dispatch({ type: SET_MARKET_DATA_START });
    let token = localStorage.getItem("token");
    if(!token) {localStorage.clear(); return dispatch({ type: SET_MARKET_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder
    
    market = cleanData(market);
    if(market.error) return dispatch({ type: ERROR_SET_MARKET_DATA, payload: {error: market.error} });

    return axiosWithAuth(token)
    .post(`${HOST_URL}/markets`, market)
    .then(res => {
        dispatch({type: "GET_USER_DATA_END", payload: {userData: null}});
        dispatch({type: SET_MARKET_DATA_END, payload: {marketData: res.data}}); //fire this first so we dont get GET_START fire before GET_END
        //fire another endpoint here so we can be quicker about gathering data
        return
    })
    .catch(err =>{
        console.error(err);
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
    .get(`${HOST_URL}/markets/${marketId}`)
    .then(res => {
        dispatch({type: GET_MARKET_DATA_END, payload: {marketData: res.data}});
    })
    .catch(err => {
        //check if bad token if so clear local data
        dispatch({type: ERROR_GET_MARKET_DATA,  payload: {error: err}});
    })
}

export const updateMarket = (market, marketId) => dispatch => 
{
    dispatch({ type: GET_MARKET_DATA_START });
    
    let token = localStorage.getItem("token");
    if(!token || !marketId || marketId < 1 || isNaN(marketId)) {
        localStorage.clear(); 
        console.log("error")
        return dispatch({ type: ERROR_GET_MARKET_DATA, payload: { error: "Must have token to be on this page"} });
    } //this is probably an intruder

    market = cleanData(market);
    if(market.error){ return dispatch({ type: ERROR_SET_MARKET_DATA, payload: {error: market.error} });}

    return axiosWithAuth(token)
    .put(`${HOST_URL}/markets/${marketId}`, market)
    .then(res => {
        dispatch({type: SET_MARKET_DATA_END, payload: {marketData: res.data}});
    })
    .catch(err => {
        console.error(err);
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

export const localMarketSwitch = (market) => dispatch =>
{
    dispatch({ type: SET_MARKET_DATA_START });
    //add varification here at some point;
    dispatch({ type: SET_MARKET_DATA_END, payload: {marketData: market} });
}

function cleanData(market)
{
    market.operation = JSON.parse(market.operation);
    let cleanopp = null;
    if(market.operation && market.operation.length) cleanopp = market.operation.map(x=> {return {day: x.day, start: x.start, end: x.end}});
    let clean = 
    {
        address: market.Address,
        city: market.City,
        description: market["Market Description"],
        facebook: market.Facebook ? market.Facebook : "",
        //image: market.image,
        instagram: market.Instagram ? market.Instagram : "",
        type: market.market_type === "Public" ? 1 : 2,
        name: market["Market Name"],
        operation: cleanopp ? cleanopp : [],
        state: market.State,
        twitter: market.Twitter ? market.Twitter : "",
        zipcode: market["Zip Code"]
    }
    if(market.Website && market.Website!=="") clean.website = market.Website;
    let required = ["address", "city", "description","state","zipcode"]
    let test = required.filter(x=> !clean[x] || clean[x].split(" ").join("") === "" || clean[x] === null);
    if(test.length > 0) return {error: `${test[0]} is a required field`};
    if(!clean.operation || clean.operation.length < 1) return {error: `must have at least one hour of operation`};
    clean.operation = clean.operation.filter(x=> x.start && x.end);
    if(!clean.operation || clean.operation.length < 1) return {error: `must have at least one hour of operation`};
    if(isNaN(clean.zipcode) || clean.zipcode < 1000) return {error: `zipcode must be a real number`};
    return clean;
}