import { combineReducers } from 'redux';
import routes from './routes';
import token from './token';
import view from './view';
import tileList from './tileList';
import cart from './cart';
import admin from './admin';

export default combineReducers({
  routes,
  token,
  view,
  tileList,
  cart,
  admin
});