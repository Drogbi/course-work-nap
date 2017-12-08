import {SET_IS_ADMIN} from "../constants/reducers/admin";

const initialState = {
  isAdmin: false,
};

export default function reducer(state = initialState, action = {}) {
  console.log(action);
  switch (action.type) {
    case SET_IS_ADMIN:
      console.log(action);
      return {
        ...state,
        isAdmin: action.isAdmin,
      };
    default:
      return state;
  }
}