import { ADD_TO_CART, CLEAN_CART } from "../constants/reducers/cart";

export const addToCartDispatcher = (cartItems) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    cartItems: cartItems,
  });
};

export const cleanCartDispatcher = () => (dispatch) => {
  dispatch({
    type: CLEAN_CART,
  });
};