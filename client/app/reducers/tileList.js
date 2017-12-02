import { ActionConst } from 'react-native-router-flux';
import eventListData from "../constants/tileList/eventsList"
import { SET_TILE_LIST_DATA } from "../constants/reducers/tileList";

const initialState = {
  tileListData: eventListData,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_TILE_LIST_DATA:
      return {
        ...state,
        tileListData: action.tileListData,
      };
    default:
      return state;
  }
}