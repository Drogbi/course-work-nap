import React, { Component } from 'react';
import { Dimensions, StatusBar, ToolbarAndroid, View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import tabNavigatorStyles from './tabNavigatorStyles';
import { bindActionCreators } from 'redux'
import { setViewDispatcher } from "../../actions/viewActions";

class Main extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <View style={ tabNavigatorStyles.root}>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  routes: state.routes.routes,
  token: state.token.token,
  view: state.view.view,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setViewDispatcher }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);