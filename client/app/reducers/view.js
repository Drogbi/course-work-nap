import {SET_VIEW} from "../constants/reducers/view";

const initialState = {
  view: 'EventsList',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_VIEW:
      return {
        ...state,
        view: action.view,
      };
    default:
      return state;
  }
}