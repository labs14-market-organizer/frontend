import {
GET_MARKETS_BY_AREA_DATA_START,
GET_MARKETS_BY_AREA__DATA_END,
GET_MARKETS_BY_AREA__ERROR
} from '../actions/searchMarkets';

const initialState = 
{
    marketsBySearch: [],
    searching: false,
    searchError: null
}

export const checkMarketsByArea = (state = initialState, action) => 
{
    switch(action.type)
    {
        case GET_MARKETS_BY_AREA_DATA_START:
            return {
                ...state,
                searchError: null,
                searching: true
            }
        case GET_MARKETS_BY_AREA__DATA_END:
            return {
                ...state,
                marketsBySearch: action.payload,
                searchError: null,
                searching: false
            }
        case GET_MARKETS_BY_AREA__ERROR:
            return {
                ...state,
                marketsBySearch: [],
                searching: false,
                searchError: action.payload.error
            }
        default:
            return state;
    }

}