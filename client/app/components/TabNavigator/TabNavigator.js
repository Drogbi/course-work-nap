import React, { Component } from 'react';
import {TouchableOpacity, ToolbarAndroid, View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import tabNavigatorStyles from './tabNavigatorStyles';
import { bindActionCreators } from 'redux'
import { setViewDispatcher } from "../../actions/viewActions";
import homeIcon from '../../assets/images/icons8-home-100.png';
import profileIcon from '../../assets/images/icons8-profile-100.png';
import { setTileListDataDispatcher } from "../../actions/tileListActions";
import eventsListData from '../../constants/tileList/eventsList';

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
        <TouchableOpacity onPress={() => this.props.setViewDispatcher('Profile')}>
        <Image
          style={tabNavigatorStyles.tab}
          resizeMode={'contain'}
          source={profileIcon}
        />
      </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setTileListDataDispatcher, setViewDispatcher }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigator);