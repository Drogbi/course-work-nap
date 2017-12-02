import React, { Component } from 'react';
import { View } from 'react-native';

class Viewer extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render () {
    return (
      <View>
        <this.props.children/>
      </View>
    )
  }
}

export default Viewer;