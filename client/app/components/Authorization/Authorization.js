import React, {Component} from 'react';
import {ActivityIndicator, AsyncStorage, KeyboardAvoidingView, Button, Image, ToolbarAndroid, TouchableHighlight, View, Text, TextInput, StyleSheet} from 'react-native';
import logo from '../../assets/images/bi_logo.png';
import { MAIN_COLOR } from "../../constants/colors";
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import authorizationStyles from './authorizationStyles'
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { TOKEN } from "../../constants/session";
import { setStorageValue } from "../../utils/storage";
import { bindActionCreators } from 'redux';
import { setIsAdminDispatcher } from "../../actions/adminAciton";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


class Authorization extends Component{
  constructor(props){
    super(props);
    this._onChangeEmailInput = this._onChangeEmailInput.bind(this);
    this._onChangePasswordInput = this._onChangePasswordInput.bind(this);
    this._onSignUpButton = this._onSignUpButton.bind(this);
    this._onLogInButton = this._onLogInButton.bind(this);
    this.state = {
      emailUnderlineColor: 'green',
      inputEmail: '',
      inputPassword: '',
      inputsValidation: false,
      fail: false,
    };
  }

  _onChangeEmailInput(email){
    if(emailRegex.test(email)) {
      this.setState({
        emailUnderlineColor: 'green',
        inputEmail: email,
        inputsValidation: true,
      })
    }
    else {
      this.setState({
        emailUnderlineColor: 'red'
      })
    }
  }

  _onChangePasswordInput(password){
    this.setState({
      inputPassword: password,
      inputsValidation: true
    })
  }
  _onSignUpButton(){
    this.props.newUserMutation({
      variables: { email: this.state.inputEmail, password: this.state.inputPassword }
    })
      .then(({ data }) => {
      })
      .catch((error) => {
        console.log('there was an error sending the query', error);
        throw error;
    });
  }


  _onLogInButton(){
    this.props.checkUserMutation({
      variables: { email: this.state.inputEmail, password: this.state.inputPassword }
    })
      .then(({ data }) => {
        if(data.checkUser.message === 'Log in success'){
          setStorageValue(TOKEN, data.checkUser.token)
            .then(()=>{
              this.props.setIsAdminDispatcher(data.checkUser.isAdmin);
              Actions.app();
            });
        } else{
          this.setState({fail:true})
        }
      })
      .catch((error) => {
        throw error;
    });
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
                onChangeText={this._onChangePasswordInput}
                placeholder={'Password'}
              />
            </View>
            {this.state.fail && <Text style={authorizationStyles.fail}>log in failed</Text>}
            <View style={ authorizationStyles.buttonGroup }>
              <Button
                style={ authorizationStyles.logInButton }
                title="Log In"
                color={ MAIN_COLOR }
                onPress={ this._onLogInButton }
              />
              <View>
                <View style={{alignSelf:'center',position:'absolute',borderBottomColor:'gray',borderBottomWidth:1,height:'50%',width:'100%'}}/>
                <Text style={{alignSelf:'center',padding:10, backgroundColor:'white'}}>OR</Text>
              </View>
              <Button
                style={ authorizationStyles.signUpButton }
                title="Create new BookIt account"
                color={ MAIN_COLOR }
                onPress={ this._onSignUpButton }
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const checkUserMutation = gql`
    mutation checkUser($email: String, $password: String) {
     checkUser(email: $email, password: $password) {
        token
        message
        isAdmin
      }
    }
`;

const addUserMutation = gql`
    mutation addUser($email: String, $password: String) {
      addUser(email: $email, password: $password) {
        email
        password
      }
    }
`;

const AuthorizationWithMutations = compose(
  graphql(addUserMutation, {name: 'newUserMutation'}),
  graphql(checkUserMutation, {name: 'checkUserMutation'})
)(Authorization);

const mapStateToProps = (state) => ({
  routes: state.routes.routes,
  token: state.token.token,
  viewData: state.view.viewData,
  tileListData: state.tileList.tileListData,
  cartItems: state.cart.cartItems,
  isAdmin: state.admin.isAdmin,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setIsAdminDispatcher }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationWithMutations);