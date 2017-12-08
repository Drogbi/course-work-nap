import React, { Component } from 'react';
import { Dimensions, StatusBar, ToolbarAndroid, View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import logoXS from '../../assets/images/bi_logo_xs.png';
import exitIcon from 'material-design-icons/action/drawable-xxxhdpi/ic_exit_to_app_white_48dp.png';
import shopCartIcon from 'material-design-icons/action/drawable-xxxhdpi/ic_shopping_cart_white_48dp.png';
import mainStyles from "./mainStyles";
import { setStorageValue } from "../../utils/storage";
import { TOKEN } from "../../constants/session";
import EventList from "../TileList/TileList"
import { MAIN_COLOR } from "../../constants/colors";
import { BoxShadow } from 'react-native-shadow'
import { SHADOW_OPT } from "../../constants/shadowStyles";
import VIEWS from '../../constants/views'
import { setTokenDispatcher } from "../../actions/tokenActions";
import { setViewDispatcher } from "../../actions/viewActions";
import { bindActionCreators } from 'redux'
import Viewer from '../Viewer/Viewer'
import TabNavigator from '../TabNavigator/TabNavigator'

class TileList extends Component{
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
        <Viewer viewProps={this.props.viewData.viewProps} >{VIEWS[this.props.viewData.viewRoute]}</Viewer>
        <TabNavigator/>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  routes: state.routes.routes,
  token: state.token.token,
  viewData: state.view.viewData,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setTokenDispatcher, setViewDispatcher }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TileList);