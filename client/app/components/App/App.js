import React, { Component } from 'react';
import {ActivityIndicator, AsyncStorage, ToolbarAndroid, TouchableHighlight, View } from 'react-native';
import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux';
import { TOKEN } from '../../constants/session'
import { getStorageValue } from "../../utils/storage";
import { setTokenDispatcher } from '../../actions/tokenActions'


class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount(){
    getStorageValue(TOKEN)
      .then((token)=>{
        if(token){
          this.props.setTokenDispatcher(token);
          Actions.main();
        } else {
          Actions.authorization();
        }
      })
  }
  render () {

    return (
      <View>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  token: state.token.token,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setTokenDispatcher }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);