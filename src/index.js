import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import {createAPI} from "./services/api";
import {rootReducer} from "./store/root-reducer";
import {checkAuthStatus, fetchOffers} from "./middleware/thunk-api";

import {App} from "./components/app/app";
import {userActionCreator} from "./store/user/user-action";
import {redirect} from "./middleware/redirect";

const api = createAPI(() => {
  store.dispatch(userActionCreator.authorizationFail());
});

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchOffers()),
  store.dispatch(checkAuthStatus()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>,
      </Provider>,
      document.querySelector(`#root`)
  );
});
