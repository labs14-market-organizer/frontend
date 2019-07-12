import axios from "axios";
import { axiosWithAuth } from "./../utls/axiosWithAuth";

const HOST_URL = ""


var token, data; //set globally so we can use them later for debuging;
//local data
export const GET_LOCAL_DATA = "GET_LOCAL_DATA";
export const SET_LOCAL_DATA = "SET_LOCAL_DATA";
export const ERROR_LOCAL_DATA_BAD_TOKEN = "ERROR_LOCAL_DATA_BAD_TOKEN";
export const ERROR_LOCAL_DATA_BAD_DATA = "ERROR_LOCAL_DATA_BAD_DATA";
export const GET_USER_DATA_START = "GET_USER_DATA_START";
export const GET_USER_DATA_END = "GET_USER_DATA_END";
export const ERROR_GET_USER_DATA = "ERROR_GET_USER_DATA";

export const getUserData = (token) => dispatch => {
    dispatch({ type: GET_USER_DATA_START });
    return axiosWithAuth(token)
        .get(`${HOST_URL}\profile`)
        .then(res => {
            if(!res.data) throw "interal client error";
            setLocalData(token,res.data);
            return {type: GET_USER_DATA_END, payload: {token, data: res.data}}
        })
        .catch(err => {
            dispatch({ type: ERROR_GET_USER_DATA, payload: {error: err} });
        })
};

export const getLocalData = () =>
{
    token = localStorage.getItem("token");
    console.log(token);
    if(!token) return{type: ERROR_LOCAL_DATA_BAD_TOKEN, payload: { error: "could not find token"}}
    data = localStorage.getItem("userdata");

    return {type: GET_LOCAL_DATA, payload: { userData: JSON.parse(data), token }}
}

export const setLocalData = (token, data) => //data should be an object of the user profile info
{
    if(token) localStorage.setItem("token", token); else return console.error("token invalid");
    if(data) localStorage.setItem("userdata", JSON.stringify(data)); else return console.error("data invalid");
    return {type: SET_LOCAL_DATA, payload: {token, data}};
}