import { SET_VIEW } from "../constants/reducers/view";

export const setViewDispatcher = (view) => (dispatch) => {
  console.log(view);
  dispatch({
    type: SET_VIEW,
    view: view
  });
};