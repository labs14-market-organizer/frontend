import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/utls/store'

import './index.scss';
import App from './App';

// const store = createStore(rootReducer, 
//     applyMiddleware(thunk, logger));


//withRouter(props => <App {...props} />); {/*allows top level to read the url tag */}
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById("root")
);