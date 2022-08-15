import { FETCH_USER_REQUEST } from "./userTypes";
import { FETCH_USER_FAILURE } from "./userTypes";
import { FETCH_USER_SUCCESS } from "./userTypes";
import axios from "axios";

//actions

function fetchUserRequest() {
  return {
    type: FETCH_USER_REQUEST,
  };
}

function fetchUserFailure(error) {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
}

function fetchUserSuccess(users) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
}

//async action creator

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};
