import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { BrowserRouter as Router } from "react-router-dom";
import Scrollfix from "./components/Scrollfix";
import { Provider } from "react-redux";
import store from "./redux/utls/store";

import "./index.scss";
import App from "./App";

const OverflowFix = styled.div`
  overflow-x: hidden;
`;
// const store = createStore(rootReducer,
//     applyMiddleware(thunk, logger));

//withRouter(props => <App {...props} />); {/*allows top level to read the url tag */}
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Scrollfix>
        <OverflowFix>
          <App />
        </OverflowFix>
      </Scrollfix>
    </Router>
  </Provider>,
  document.getElementById("root")
);
