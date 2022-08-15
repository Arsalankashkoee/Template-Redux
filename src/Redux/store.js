import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
// ----- redux-dev-tools -----
import { composeWithDevTools } from "redux-devtools-extension";
// import cakeReducer from "./Cake/cakeReducer";
import thunk from "redux-thunk";

// ----- single-state -----
// const store = createStore(cakeReducer);

//----- combine-reducers -----
// const store = createStore(rootReducer, applyMiddleware(logger));

// ----- redux-dev-tools -----
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
