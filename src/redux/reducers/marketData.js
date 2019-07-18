import {
    GET_LOCAL_DATA,
    SET_LOCAL_DATA, 
    ERROR_LOCAL_DATA_BAD_DATA, 
    ERROR_LOCAL_DATA_BAD_TOKEN,
    GET_MARKET_DATA_START,
    GET_MARKET_DATA_END,
    ERROR_GET_MARKET_DATA
} from '../actions/marketData';

const initalState =
{
    token: null,
    marketData: null,
    error: undefined,
    fetching: true
}

export const checkUserData = (state = initalState, action) =>
{
    switch(action.type)
    {
        case GET_MARKET_DATA_END:
            return {
                ...action.payload,
                fetching: false
            }
        case SET_LOCAL_DATA:
            return {fetching: false, ...state}; //dont do anything this just sets data
        case ERROR_GET_MARKET_DATA:
        case ERROR_LOCAL_DATA_BAD_TOKEN:
        case ERROR_LOCAL_DATA_BAD_DATA: //this should nv trigger, we auto check data and request if data doesnt exist
            return {...initalState, error: action.payload.error, fetching: false}
        
        case GET_MARKET_DATA_START:
        default:
            return state;
    }
}