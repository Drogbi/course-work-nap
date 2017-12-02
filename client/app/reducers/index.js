import { combineReducers } from 'redux';
import routes from './routes';
import token from './token';
import view from './view'

export default combineReducers({
  routes,
  token,
  view,
});