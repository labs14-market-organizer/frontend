import axios from "axios";
import { axiosWithAuth } from "./../utls/axiosWithAuth";
import {HOST_URL} from "./../utls/hostUrl";



//var token, data; //set globally so we can use them later for debuging;
//local data
export const GET_LOCAL_DATA = "GET_LOCAL_DATA";
export const SET_LOCAL_DATA = "SET_LOCAL_DATA";
export const ERROR_LOCAL_DATA_BAD_TOKEN = "ERROR_LOCAL_DATA_BAD_TOKEN";
export const ERROR_LOCAL_DATA_BAD_DATA = "ERROR_LOCAL_DATA_BAD_DATA";
export const GET_USER_DATA_START = "GET_USER_DATA_START";
export const GET_USER_DATA_END = "GET_USER_DATA_END";
export const ERROR_GET_USER_DATA = "ERROR_GET_USER_DATA";

export const getUserData = (token=null) => dispatch => {
    dispatch({ type: GET_USER_DATA_START });
    
    let dis = getLocalData(); //go get from local storage
    
    if(!token) token =  dis.payload.token ? dis.payload.token : null; // if no token then assign from local storage
    if(!dis.payload.error)  return dispatch(dis); //if gathering local storage didnt error then just give back that info
    if(!token) return dispatch({type: ERROR_LOCAL_DATA_BAD_TOKEN, payload: {error: "Invalid Token"}}); //if we couldnt grab a token triger kick to landing
    //if above checks fail then we will query the server to get the data
    return axiosWithAuth(token)
        .get(`${HOST_URL}/user`)
        .then(res => {
            if(!res.data) throw "interal client error";
            console.log(res.data);
            let userType = "undefined";
            try { 
                userType = res.data.markets.length > 0 ? "Market Owner" : res.data.vendors.length > 0 ? "Vendor" : "undefined" 
                if(res.data.markets && res.data.markets.length > 0) dispatch({ type: "SET_MARKET_DATA_END", payload: {marketData: res.data.markets[0]} });
                else if(res.data.vendors && res.data.vendors.length > 0) dispatch({ type: "SET_VENDOR_DATA_END", payload: {vendorData: res.data.vendors[0]} });
            }catch{}
            //localStorage.setItem("userdata", JSON.stringify(res.data));
            localStorage.setItem("token", token);
            //localStorage.setItem("userType", userType);
            
            return dispatch({type: GET_USER_DATA_END, payload: {token, userData: res.data, userType}});
        })
    .catch(err => {
            dispatch({ type: ERROR_GET_USER_DATA, payload: {error: err} });
        })
};

const getLocalData = () =>
{
    let token, data;
    token = localStorage.getItem("token");
    if(!token) return{type: ERROR_LOCAL_DATA_BAD_TOKEN, payload: { error: "could not find token"}}
    data = localStorage.getItem("userdata");
    if(!data) return {type: ERROR_LOCAL_DATA_BAD_DATA, payload: { error: "could not find data", token}}
    data = JSON.parse(data);
    let userType = "undefined";
     try { userType = data.markets.length > 0 ? "Market Owner" : data.vendors.length > 0 ? "Vendor" : "undefined" }catch{}
    return {type: GET_LOCAL_DATA, payload: { userData: data , token, userType }}
}

export const setLocalData = (token, data) => dispatch => { //data should be an object of the user profile info
    console.log("data");
    dispatch({ type: GET_USER_DATA_START });
    
    if(token) localStorage.setItem("token", token); else dispatch({type: ERROR_LOCAL_DATA_BAD_TOKEN, payload: {error: "token invalid" }});
    if(data) localStorage.setItem("userdata", JSON.stringify(data)); else dispatch({type: SET_LOCAL_DATA, payload: {error: "data invalid" }});
    dispatch({type: SET_LOCAL_DATA, payload: {token, data}});
}