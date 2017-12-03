import { SET_VIEW } from "../constants/reducers/view";

export const setViewDispatcher = (viewRoute, viewProps) => (dispatch) => {
  dispatch({
    type: SET_VIEW,
    viewData: {viewRoute, viewProps}
  });
};