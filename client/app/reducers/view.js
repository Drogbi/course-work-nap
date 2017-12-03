import {SET_VIEW} from "../constants/reducers/view";

const initialState = {
  viewData: { viewRoute:'TileList', viewProps: {} },
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_VIEW:
      return {
        ...state,
        viewData: action.viewData,
      };
    default:
      return state;
  }
}