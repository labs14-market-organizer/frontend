import axios from "axios";
import { axiosWithAuth } from "./../utls/axiosWithAuth";
import {HOST_URL} from "./../utls/hostUrl";
import {getUserData} from "./userData";

export const GET_MARKET_DATA_START = "GET_USER_DATA_START";
export const GET_MARKET_DATA_END = "GET_USER_DATA_END";
export const SET_MARKET_DATA_START = "SET_MARKET_DATA_START";
export const SET_MARKET_DATA_END = "SET_MARKET_DATA_END";
export const ERROR_GET_MARKET_DATA = "ERROR_GET_USER_DATA";
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
    let token = localStorage.getItem("token");
    if(!token) {localStorage.clear(); return dispatch({ type: SET_MARKET_DATA_START, payload: { error: "Must have token to be on this page"} });} //this is probably an intruder

    return axiosWithAuth(token)
    .post(`${HOST_URL}`)
    .then(res => {
        localStorage.removeItem("userData");//remove out of date data
        getUserData(token); //fire another endpoint here so we can be quicker about gathering data
        return dispatch({type: GET_USER_DATA_END, payload: {token, data: res.data}});
    })
    .catch(err =>{
        //check if bad token if so clear local data
        dispatch({ type: ERROR_GET_USER_DATA, payload: {error: err} }); 
    })
}