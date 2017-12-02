import React, { Component } from "react";
import {TouchableOpacity, Image, View, Text, FlatList } from "react-native";
import eventNotesListStyle from "./eventNotesListStyles"
import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux'

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { icon: barbellIcon, title: 'Sport' },
        { icon: schoolIcon, title: 'Education' },
        { icon: carouselIcon, title: 'Entertainment' },
      ],
    };
    this._onPress = this._onPress.bind(this);
  }

  render() {
    return (
      <View style={eventsListStyle.root}>
        <FlatList
          data={this.state.data}
          numColumns = {2}
          renderItem={({item}) => (
            <TouchableOpacity style={eventsListStyle.event} onPress={this._onPress}>
              <Image
                style={eventsListStyle.eventImage}
                source={item.icon}
              />
              <Text style={eventsListStyle.eventTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
        />
      </View>

    );
  }
}

const mapStateToProps = (state) => ({
  routes: state.routes.routes,
  token: state.token.token,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventList);