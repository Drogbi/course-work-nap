import { ActionConst } from 'react-native-router-flux';

import { SET_TOKEN } from "../constants/reducers/token";

const initialState = {
  scene: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionConst.FOCUS:
      console.log(action);
      return {
        ...state,
        scene: action.scene,
      };
    default:
      return state;
  }
}