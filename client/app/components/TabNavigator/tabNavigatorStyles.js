import { StyleSheet } from 'react-native';
import { MAIN_COLOR } from "../../constants/colors";

export default tabNavigatorStyles = StyleSheet.create({
  root:{
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 70,
    alignSelf: 'flex-end',
    backgroundColor: MAIN_COLOR,
    alignItems:'center',
  },
  tab:{
    width: 130,
    height: 50,
  },
  counter:{
    color: 'white',
    position: 'absolute',
    top: 0,
    right: 20,
    fontSize: 20,
  },
  separator: {
    height: 100,
    width: 2,
    backgroundColor: '#d3d3d3'
  }
});
