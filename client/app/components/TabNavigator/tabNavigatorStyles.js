import { StyleSheet } from 'react-native';
import { MAIN_COLOR } from "../../constants/colors";

export default tabNavigatorStyles = StyleSheet.create({
  root:{
    height: '100%',
    backgroundColor: 'white',
  },
  toolbar: {
    backgroundColor: MAIN_COLOR,
    height: 58,
    alignItems: 'center',
    justifyContent:'center',
  },
  container: {
    backgroundColor: '#dddddd',
    height: 50,
    margin: 20,
    marginBottom: 0,
    paddingLeft: 10
  }
});
