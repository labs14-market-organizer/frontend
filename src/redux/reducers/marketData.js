import {
    GET_MARKET_DATA_START,
    GET_MARKET_DATA_END,
    SET_MARKET_DATA_START,
    SET_MARKET_DATA_END,
    ERROR_GET_MARKET_DATA,
    ERROR_SET_MARKET_DATA,
    ERROR_INVALID_TOKEN,
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
        case SET_MARKET_DATA_END:
        case GET_MARKET_DATA_END:
            return {
                ...state,
                ...action.payload,w
                fetching: false
            }        
        case ERROR_GET_MARKET_DATA:
        case ERROR_SET_MARKET_DATA:
            return {...initalState, token: state.token,  error: action.payload.error, fetching: false}
        case ERROR_INVALID_TOKEN: //this should nv trigger, we auto check data and request if data doesnt exist
        return {...initalState,  error: action.payload.error, fetching: false}
    
        case SET_MARKET_DATA_START:
        case GET_MARKET_DATA_START:
            fetching = true;
        default:
            return state;
    }
}