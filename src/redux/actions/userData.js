import axios from "axios";
import { axiosWithAuth } from "./../utls/axiosWithAuth";
import {HOST_URL} from "./../utls/hostUrl";



var token, data; //set globally so we can use them later for debuging;
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
    console.log(dis);
    if(!token) token =  dis.payload.token ? dis.payload.token : null; // if no token then assign from local storage
    if(!dis.payload.error)  return dispatch(dis); //if gathering local storage didnt error then just give back that info
    if(!token) return dispatch({type: ERROR_LOCAL_DATA_BAD_TOKEN, payload: {error: "Invalid Token"}}); //if we couldnt grab a token triger kick to landing
    //if above checks fail then we will query the server to get the data
    
    return axiosWithAuth(token)
        .get(`${HOST_URL}`)
        .then(res => {
            if(!res.data) throw "interal client error";
            setLocalData(token,res.data);
            return dispatch({type: GET_USER_DATA_END, payload: {token, data: res.data}});
        })
        .catch(err => {
            dispatch({ type: ERROR_GET_USER_DATA, payload: {error: err} });
        })
};

const getLocalData = () =>
{
    token = localStorage.getItem("token");
    if(!token) return{type: ERROR_LOCAL_DATA_BAD_TOKEN, payload: { error: "could not find token"}}
    data = localStorage.getItem("userdata");
    if(!data) return {type: ERROR_LOCAL_DATA_BAD_DATA, payload: { error: "could not find data", token}}

    return {type: GET_LOCAL_DATA, payload: { userData: JSON.parse(data), token }}
}

export const setLocalData = (token, data) => //data should be an object of the user profile info
{
    if(token) localStorage.setItem("token", token); else return console.error("token invalid");
    if(data) localStorage.setItem("userdata", JSON.stringify(data)); else return console.error("data invalid");
    return {type: SET_LOCAL_DATA, payload: {token, data}};
}