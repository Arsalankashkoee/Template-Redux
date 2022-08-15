import { combineReducers } from "redux";
import cakeReducer from "./Cake/cakeReducer";
import iceCreamReducer from "./IceCream/icecreamReducer";
import userReducer from "./User/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

export default rootReducer;
