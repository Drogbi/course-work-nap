import React, {Component} from 'react';
import {KeyboardAvoidingView, Button, Image, ToolbarAndroid, TouchableHighlight, View, Text, TextInput, StyleSheet} from 'react-native';
import logo from '../../assets/images/bi_logo.png';
import {mainColor} from "../../constants/colors";

import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import authorizationStyles from './authorizationStyles'

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

class Authorization extends Component{
  constructor(props){
    super(props);
    this._onChangeEmailInput = this._onChangeEmailInput.bind(this);
    this.state = {
      emailUnderlineColor: 'green'
    };
  }

  _onInputLayout(event){
    console.warn(event.nativeEvent.layout)
  }

  _onChangeEmailInput(email){
    if(emailRegex.test(email)) {
      this.setState({emailUnderlineColor: 'green'})
    }
    else {
      this.setState({emailUnderlineColor: 'red'})
    }
  }

  render(){
    return(
      <View style={authorizationStyles.root}>
        <KeyboardAvoidingView behavior={'position'} >
          <View style={authorizationStyles.logoContainer}>
            <Image
              style={authorizationStyles.logoImage}
              resizeMode={'contain'}
              source={logo}
            />
          </View>
          <View style={authorizationStyles.formContainer}>
            <View>
              <TextInput
                style={authorizationStyles.emailInput}
                onChangeText={this._onChangeEmailInput}
                placeholder={'Email'}
                underlineColorAndroid={this.state.emailUnderlineColor}
              />
              <TextInput
                style={authorizationStyles.passwordInput}
                secureTextEntry={true}
                onChangeText={(text) => this.setState({text})}
                placeholder={'Password'}
              />
            </View>
            <View style={authorizationStyles.buttonGroup}>
              <Button
                style={authorizationStyles.logInButton}
                title="Log In"
                color={mainColor}
                onPress={()=>{}}
              />
              <View>
                <View style={{alignSelf:'center',position:'absolute',borderBottomColor:'gray',borderBottomWidth:1,height:'50%',width:'100%'}}/>
                <Text style={{alignSelf:'center',padding:10, backgroundColor:'white'}}>OR</Text>
              </View>
              <Button
                style={authorizationStyles.signUpButton}
                title="Create new BookIt account"
                color={mainColor}
                onPress={()=>{Actions.app()}}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

export default connect(({routes}) => ({routes}))(Authorization)