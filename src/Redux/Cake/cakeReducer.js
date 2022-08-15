import { BUY_CAKE } from "./cakeTypes";

// reducer
const initialState = {
  numOfCakes: 11,
};

// const cakeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return { ...state, numOfCakes: state.numOfCakes - 1 };
//     default:
//       return state;
//   }
// };
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - action.payload };
    default:
      return state;
  }
};

export default cakeReducer;
