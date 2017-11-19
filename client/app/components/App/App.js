import React, { Component } from 'react';
import {ToolbarAndroid, TouchableHighlight, View, Text, TextInput, StyleSheet } from 'react-native';
import Toolbar from '../Toolbar/Toolbar';
import appStyles from './appStyles'
import settingsIcon from 'material-design-icons/action/drawable-xxxhdpi/ic_settings_white_24dp.png';
import logoIcon from 'material-design-icons/image/drawable-xxxhdpi/ic_camera_white_24dp.png';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'George Washington',
    };
    this.updateName = this.updateName.bind(this)
  }
  updateName(name) {
    this.setState({
      name
    })
  }
  render () {
    const query = gql`query PresidentQuery($name: String!) { 
      president(name: $name) {
        name
        term
        party
      }
    }`;


    class President extends Component {
      constructor(props) {
        super(props);
      }

      render(){
        return(
          <View style={{paddingLeft: 20, paddingTop: 20}}>
            <Text>Term: {console.warn(this.props.data)}</Text>
            <Text>Name: {this.props.data.president && this.props.data.president.name}</Text>
            <Text>Party: {this.props.data.president && this.props.data.president.party}</Text>
            <Text>Term: {this.props.data.president && this.props.data.president.term}</Text>
          </View>
        )
      }
    }

    const ViewWithData = graphql(query, {
      options: { variables: { name: this.state.name } }
    })(President);

    return (
      <View style={appStyles.container}>
        <Toolbar></Toolbar>
        <Text style={{textAlign: 'center'}}>Find President Info</Text>
        <TextInput
          onChangeText={this.updateName}
          style={appStyles.input} />
        <ViewWithData />
      </View>
    )
  }
}



export default connect(({routes}) => ({routes}))(App)
