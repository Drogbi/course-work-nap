import { StyleSheet } from 'react-native';
import {MAIN_COLOR} from "../../constants/colors";

export default eventListStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
  event: {
    width: 130,
    height: 130,
    backgroundColor: MAIN_COLOR,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10,
    margin: 10,
  },
  eventImage: {
    width: 100,
    height: 100,
  }
});