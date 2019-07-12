import {
    GET_LOCAL_DATA,
    SET_LOCAL_DATA, 
    ERROR_LOCAL_DATA_BAD_DATA, 
    ERROR_LOCAL_DATA_BAD_TOKEN,
    GET_USER_DATA_START,
    GET_USER_DATA_END,
    ERROR_GET_USER_DATA
} from '../actions/userData';

const initalState =
{
    token: null,
    userData: null,
    error: undefined
}

export const getLocalData = (state = initalState, action) =>
{
    switch(action.type)
    {
        case GET_LOCAL_DATA:
            return {
                ...initalState,
                ...action.payload
            }
        case SET_LOCAL_DATA:
            return state; //dont do anything this just sets data
        case ERROR_LOCAL_DATA_BAD_TOKEN:
        case ERROR_LOCAL_DATA_BAD_DATA: //re request the data
            return {...initalState, error: action.payload.error}
        default:
            return state;
    }
}