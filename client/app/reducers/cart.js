import { ADD_TO_CART, CLEAN_CART } from "../constants/reducers/cart";

const initialState = {
  cartItems: [],
};

export default function reducer(state = initialState, action = {}) {
  console.log(action);
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action);
      return {
        ...state,
        cartItems: state.cartItems.concat(action.cartItems),
      };
    case CLEAN_CART: {
      return {
        ...state,
        cartItems: [],
      }
    }
    default:
      return state;
  }
}