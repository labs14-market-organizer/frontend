import { axiosWithAuth } from "./../utls/axiosWithAuth";
import {HOST_URL} from "./../utls/hostUrl";


export const GET_MARKETS_BY_AREA_DATA_START = "GET_MARKETS_BY_AREA_DATA_START";
export const GET_MARKETS_BY_AREA__DATA_END = " GET_MARKETS_BY_AREA__DATA_END";
export const GET_MARKETS_BY_AREA__ERROR = "GET_MARKETS_BY_AREA__ERROR";

export const searchMarkets = (query) => dispatch => 
{
    dispatch({ type: GET_MARKETS_BY_AREA_DATA_START })
    let token = localStorage.getItem("token");
    if(!token) {localStorage.clear(); return dispatch({ type: GET_MARKETS_BY_AREA_DATA_START, payload: { error: "Must have token to be on this page"} });}

    return axiosWithAuth(token)
        .get(`${HOST_URL}/markets/search?q=${query}`)
        .then(res => {
            dispatch({
                type: GET_MARKETS_BY_AREA__DATA_END, 
                payload: {marketsBySearch: res.data}
            })
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ type: GET_MARKETS_BY_AREA__ERROR, payload: {error: err.response.data.message }})
        })
}
