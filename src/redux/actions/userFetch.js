import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const register = (creds,cb) => dispatch => {
    dispatch({ type: GET_USER_START });
    let cr = { username: creds.username, password: creds.password, user_type: creds.user_type };
    let name = creds.user_type === 1 ? "seeker" : "employer";
    return axios
        .post(`${SERVER_BASE_URL}/auth/register`, cr)
        .then(res => {
            localStorage.setItem('userToken', res.data.token);
            console.log(res.data);
            localStorage.setItem('userType', res.user_type );
            localStorage.setItem('userID', res.data.id);
            axiosWithAuth()
            .post(`${SERVER_BASE_URL}/profile/${name}`,  {user_id : res.data.id})
            .then(res2=> {
                localStorage.setItem("userID", res2.data.user_id);
                dispatch({ type: LOGIN_SUCCESS, payload: res.data });
                cb();
            }).catch(err => {
                dispatch({ type: LOGIN_FAILURE, payload: err });
            })
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err });
        })
};