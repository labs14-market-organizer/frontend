import {
    GET_BOOTH_DATA_START,
    GET_BOOTH_DATA_END,
    SET_BOOTH_DATA_START,
    SET_BOOTH_DATA_END,
    ERROR_GET_BOOTH_DATA,
    ERROR_SET_BOOTH_DATA,
    ERROR_INVALID_TOKEN,
} from '../actions/boothData';

const initalState =
{
    token: null,
    boothData: null,
    error: undefined,
    fetching: true,
    updated: false
}

export const checkBoothData = (state = initalState, action) =>
{
    switch(action.type)
    {
        case SET_BOOTH_DATA_END:
        case GET_BOOTH_DATA_END:
            return {
                ...state,
                ...action.payload,
                fetching: false,
                updated: true
            }        
        case ERROR_GET_BOOTH_DATA:
        case ERROR_SET_BOOTH_DATA:
            return {...initalState, token: state.token,  error: action.payload.error, fetching: false, updated: false }
        case ERROR_INVALID_TOKEN: //this should nv trigger, we auto check data and request if data doesnt exist
        return {...initalState,  error: action.payload.error, fetching: false}
    
        case SET_BOOTH_DATA_START:
        case GET_BOOTH_DATA_START:
            state.fetching = true;
        default:
            return state;
    }
}