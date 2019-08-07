import {
    GET_VENDOR_DATA_START,
    GET_VENDOR_DATA_END,
    SET_VENDOR_DATA_START,
    SET_VENDOR_DATA_END,
    ERROR_GET_VENDOR_DATA,
    ERROR_SET_VENDOR_DATA,
    ERROR_INVALID_TOKEN,
} from '../actions/vendorData';

const initalState =
{
    token: null,
    vendorData: null,
    error: undefined,
    fetching: false,
    updated: false
}

export const checkVendorData = (state = initalState, action) =>
{
    switch(action.type)
    {
        case SET_VENDOR_DATA_END:
            return {
                ...state,
                ...action.payload,
                fetching: false,
                updated: true
            }
        case GET_VENDOR_DATA_END:
            return {
                ...state,
                ...action.payload,
                fetching: false,
                updated: true
            }        
        case ERROR_GET_VENDOR_DATA:
        case ERROR_SET_VENDOR_DATA:
            return {...initalState, token: state.token,  error: action.payload.error, fetching: false, updated: false }
        case ERROR_INVALID_TOKEN: //this should nv trigger, we auto check data and request if data doesnt exist
        return {...initalState,  error: action.payload.error, fetching: false}
    
        case SET_VENDOR_DATA_START:
        case GET_VENDOR_DATA_START:
            state.fetching = true;
        default:
            return state;
    }
}