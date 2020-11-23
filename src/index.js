import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import {rootReducer} from "./store/reducers/root-reducer";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {composeWithDevTools} from "redux-devtools-extension";
import {checkAuth, fetchOffers, fetchBookmarkOffers} from "./store/api-actions";
import {redirect} from "./store/middlewares/redirect";
import {requireAuthorization} from "./store/action";
import {AuthorizationStatus} from "./const";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchOffers()),
  store.dispatch(checkAuth()),
  store.dispatch(fetchBookmarkOffers()),
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App/>
        </Provider>,
        document.querySelector(`#root`)
    );
  });
