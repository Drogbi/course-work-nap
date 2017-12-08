import { StyleSheet } from 'react-native';
import {MAIN_COLOR, WHITE_COLOR} from "../../constants/colors";

export default tileListStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
  event: {
    padding: 20,
  },
  name: {
    fontSize: 20,
  },
  week: {

  },
  item: {
    marginLeft: 10,
  },
  price: {
    color: '#3CB371',
    fontSize: 15,
  },
  payButton: {
    flex:0,
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3CB371',
    width: 200,
    height: 60,
  },
  payText: {
    color: 'white',
    fontSize: 20,
  }

});