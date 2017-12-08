import { StyleSheet } from 'react-native';
import {MAIN_COLOR, WHITE_COLOR} from "../../constants/colors";

export default tileListStyles = StyleSheet.create({
  root: {
    width: '100%',

    padding: 20,
  },
  event: {
    position: 'relative',
    width: 355,
    height: 130,
    backgroundColor: MAIN_COLOR,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    margin: 10,
  },
  name: {
    marginLeft: 50,
    color: 'white',
    fontSize: 20,
  },
  price: {
    marginRight: 70,
    color: 'white',
    fontSize: 20,
  },
  deleteButton: {
    flex:0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    right: 0,
    zIndex: 1000,
    borderRadius: 10,
    width: 60,
    height: 130,
    backgroundColor: '#ff3232'
  }
});