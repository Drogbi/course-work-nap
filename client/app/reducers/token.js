import {SET_TOKEN} from "../constants/reducers/token";

const initialState = {
  token: '',
};

export default function reducer(state = initialState, action = {}) {
  console.log(action);
  switch (action.type) {
    case SET_TOKEN:
      console.log(action);
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}