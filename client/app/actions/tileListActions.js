import { SET_TILE_LIST_DATA } from "../constants/reducers/tileList";

export const setTileListDataDispatcher = (tileListData) => (dispatch) => {
  dispatch({
    type: SET_TILE_LIST_DATA,
    tileListData: tileListData,
  });
};