import React, { Component } from 'react';
import {TouchableOpacity, ToolbarAndroid, View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import tabNavigatorStyles from './tabNavigatorStyles';
import { bindActionCreators } from 'redux'
import { setViewDispatcher } from "../../actions/viewActions";
import homeIcon from 'material-design-icons/action/drawable-xxxhdpi/ic_home_white_48dp.png';
import profileIcon from 'material-design-icons/action/drawable-xxxhdpi/ic_account_circle_white_48dp.png';
import { setTileListDataDispatcher } from "../../actions/tileListActions";
import eventsListData from '../../constants/tileList/eventsList';
import shopCartIcon from 'material-design-icons/action/drawable-xxxhdpi/ic_shopping_cart_white_48dp.png';

class TabNavigator extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={tabNavigatorStyles.root}>
        <TouchableOpacity
          onPress={() => {
            this.props.setTileListDataDispatcher(eventsListData);
            this.props.setViewDispatcher('TileList');
          }}>
          <Image
            style={tabNavigatorStyles.tab}
            resizeMode={'contain'}
            source={homeIcon}
          />
        </TouchableOpacity>
        <View style={tabNavigatorStyles.separator}/>
        <TouchableOpacity onPress={() => this.props.setViewDispatcher('Account')}>
          <Image
            style={tabNavigatorStyles.tab}
            resizeMode={'contain'}
            source={profileIcon}
          />
        </TouchableOpacity>
        <View style={tabNavigatorStyles.separator}/>
        <TouchableOpacity onPress={() => this.props.setViewDispatcher('Cart')}>
          <Image
            style={tabNavigatorStyles.tab}
            resizeMode={'contain'}
            source={shopCartIcon}
          />
          <Text style={tabNavigatorStyles.counter}>{this.props.cartItems.reduce((counter, cartItems )=>{return counter + cartItems.items.length}, 0)}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setTileListDataDispatcher, setViewDispatcher }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigator);