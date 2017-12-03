import React, { Component } from 'react';
import { View } from 'react-native';
import viewerStyles from './viewerStyles'

class Viewer extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render () {
    return (
      <View style={viewerStyles.root}>
        <this.props.children {...this.props.viewProps}/>
      </View>
    )
  }
}

export default Viewer;