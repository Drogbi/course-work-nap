import { SET_IS_ADMIN } from "../constants/reducers/admin";

export const setIsAdminDispatcher = (isAdmin) => (dispatch) => {
  dispatch({
    type: SET_IS_ADMIN,
    isAdmin: isAdmin,
  });
};