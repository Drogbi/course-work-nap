import { Dimensions } from 'react-native';

export const SHADOW_OPT = {
  ...Dimensions.get('window'),
  height: 58,
  color:"#000",
  border:3,
  radius:1,
  opacity:0.2,
  x:0,
  y:0,
};