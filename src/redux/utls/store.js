import rootReducer from "./../reducers/index";
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
//import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk, /* logger */)
));
export default store;
