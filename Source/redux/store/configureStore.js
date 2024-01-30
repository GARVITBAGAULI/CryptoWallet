import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "../reducer";

import { apiMiddleware } from "../middleware/middlewares";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(apiMiddleware))
  );
}