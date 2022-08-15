import { BUY_ICECREAM } from "./icecreamTypes";

// reducer
const initialState = {
  numOfIceCream: 17,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIceCream: state.numOfIceCream - 1 };
    default:
      return state;
  }
};

export default iceCreamReducer;
