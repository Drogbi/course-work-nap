import { StyleSheet } from 'react-native';
import {MAIN_COLOR, WHITE_COLOR} from "../../constants/colors";

export default tileListStyles = StyleSheet.create({
  root: {
    width: '100%',
    padding: 20,
  },
  event: {
    width: 355,
    height: 130,
    // backgroundColor: MAIN_COLOR,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    margin: 10,
  },
  name: {
    fontSize: 40,
  },
  price: {
    fontSize: 20,
  },
  weekDayNav:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 70,
    marginVertical: 15,
    alignItems:'center',
  },
  weekDayTab:{
    flex:0,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 50,
    width: 50,
    backgroundColor: MAIN_COLOR,
  },
  weekDayNavSeparator: {
    height: 100,
    width: 2,
    backgroundColor: '#d3d3d3'
  },
  weekDayTabText: {
    color: 'white',
    fontSize: 20,
  },
  timeTab: {
    flex:0,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: MAIN_COLOR,
    borderWidth: 3,
    height: 50,
    width: 70,
    margin: 11,
  },
  timeTabText: {
    fontSize: 20,
  },
  activeTimeTab:{
    flex:0,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: MAIN_COLOR,
    borderWidth: 3,
    height: 50,
    width: 70,
    margin: 11,
    backgroundColor: MAIN_COLOR,
  },
  activeWeekDay: {
    alignSelf: 'center',
    fontSize: 25,
    padding: 5,
  },
  activeWeekDayContainer:{
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: MAIN_COLOR,
  }
});