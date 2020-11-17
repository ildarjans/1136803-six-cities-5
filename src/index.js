import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import {createAPI} from "./services/api";
import {rootReducer} from "./store/root-reducer";
import {fetchHotels} from "./store/api-actions";

import {App} from "./components/app/app";

const api = createAPI();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(fetchHotels())
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>,
      </Provider>,
      document.querySelector(`#root`)
  );
});
