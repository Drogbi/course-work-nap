import React, { Component } from 'react';
import {Image, ToolbarAndroid, TouchableHighlight, View, Text, TextInput, StyleSheet } from 'react-native';
import logo from '../../assets/images/bi_logo.png';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import authorizationStyles from './authorizationStyles'

class Authorization extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View>
        <View style={authorizationStyles.logo}>
          <Image
            style ={authorizationStyles.logoImage}
            source={logo}
          />
        </View>
      </View>
    )
  }
}

export default connect(({routes}) => ({routes}))(Authorization)