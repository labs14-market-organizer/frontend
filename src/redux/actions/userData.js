import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

var token, data; //set globally so we can use them later for debuging;

export const register = (creds) => dispatch => {
    dispatch({ type: GET_USER_START });
    let cr = { username: creds.username, password: creds.password, user_type: creds.user_type };
    let name = creds.user_type === 1 ? "seeker" : "employer";
    return axios
        .post(`${SERVER_BASE_URL}/auth/register`, cr)
        .then(res => {
            if(!res.data.token || res.user_type) throw "interal client error";
            localStorage.setItem('userToken', res.data.token);
            console.log(res.data);
            localStorage.setItem('userType', res.user_type );
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err });
        })
};

export const getLocalData = () =>
{
    token = localStorage.getItem("token");
    if(!token) return{ error: "could not find token"}
    data = localStorage.getItem("userdata");

    return { data: JSON.parse(data), token: token }
}

export const storeLocalData = (token, data) => //data should be an object of the user profile info
{
    if(token) localStorage.setItem("token", token); else return console.error("token invalid");
    if(data) localStorage.setItem("userdata", JSON.stringify(data)); else return console.error("data invalid");
}