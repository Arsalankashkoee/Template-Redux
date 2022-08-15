import { FETCH_USER_REQUEST } from "./userTypes";
import { FETCH_USER_FAILURE } from "./userTypes";
import { FETCH_USER_SUCCESS } from "./userTypes";

//reducer
const initialState = {
  loading: false,
  error: "",
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };

    case FETCH_USER_FAILURE:
      return { loading: false, error: action.payload, users: [] };

    case FETCH_USER_SUCCESS:
      return { loading: false, error: "", users: action.payload };
    default:
      return state;
  }
};

export default userReducer;
