import React, { Component } from 'react';
import { Dimensions, StatusBar, ToolbarAndroid, View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import logoXS from '../../assets/images/bi_logo_xs.png';
import exitIcon from 'material-design-icons/action/drawable-xxxhdpi/ic_exit_to_app_white_48dp.png';
import mainStyles from "./mainStyles";
import { setStorageValue } from "../../utils/storage";
import { TOKEN } from "../../constants/session";
import EventList from "../EventsList/EventList"
import { MAIN_COLOR } from "../../constants/colors";
import { BoxShadow } from 'react-native-shadow'
import { SHADOW_OPT } from "../../constants/shadowStyles";
import VIEWS from '../../constants/views'
import { setTokenDispatcher } from "../../actions/tokenActions";
import { setViewDispatcher } from "../../actions/viewActions";
import { bindActionCreators } from 'redux'
import Viewer from '../Viewer/Viewer'

class Main extends Component{
  constructor(props){
    super(props);
  }

  _onLogOut(){
    Actions.authorization();
    setStorageValue(TOKEN, '')
      .then(() => {
        Actions.authorization();
      })
  }

  render(){
    return(
      <View style={ mainStyles.root}>
        <StatusBar
          backgroundColor={MAIN_COLOR}
          barStyle="light-content"
        />
        <BoxShadow setting={ SHADOW_OPT }>
          <ToolbarAndroid
            style={ mainStyles.toolbar }
            logo={ logoXS }
            actions={ [{title: 'Log Out', icon: exitIcon, show: 'always'}] }
            onActionSelected={ this._onLogOut }
            contentInsetStart={168}
          />
        </BoxShadow>
        <Viewer>{VIEWS[this.props.view]}</Viewer>
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
  bindActionCreators({ setTokenDispatcher, setViewDispatcher }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);