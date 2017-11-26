import { SET_TOKEN } from "../constants/reducers/token";

export const setTokenDispatcher = (token) => (dispatch) => {
  console.log(token);
  dispatch({
    type: SET_TOKEN,
    token: token
  });
};