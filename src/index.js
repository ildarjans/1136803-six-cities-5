import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import {createAPI} from "./services/api";
import {rootReducer} from "./store/root-reducer";
import {checkAuthStatus, fetchHotels} from "./store/api-actions";

import {App} from "./components/app/app";
import {actionCreator} from "./store/actions";
import {AuthorizationStatus} from "./const";
import {redirect} from "./store/middleware/redirect/redirect";

const api = createAPI(() => {
  store.dispatch(actionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
});

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchHotels()),
  store.dispatch(checkAuthStatus())
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>,
      </Provider>,
      document.querySelector(`#root`)
  );
});
