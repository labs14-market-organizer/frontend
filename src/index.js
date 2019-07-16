import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
//import logger from 'redux-logger';

import rootReducer from './redux/reducers';



import './index.scss';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, 
//     applyMiddleware(thunk, logger));

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk, /* logger */)
));
//withRouter(props => <App {...props} />); {/*allows top level to read the url tag */}
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById("root")
);