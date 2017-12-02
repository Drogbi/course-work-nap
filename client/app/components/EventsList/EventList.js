import React, { Component } from "react";
import {TouchableOpacity, Image, View, Text, FlatList } from "react-native";
import carouselIcon from "../../assets/images/icons8-carousel-96.png";
import barbellIcon from "../../assets/images/icons8-barbell-96.png";
import schoolIcon from  "../../assets/images/icons8-school-96.png";
import eventsListStyle from "./eventListStyles"

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { icon: barbellIcon },
        { icon: schoolIcon },
        { icon: carouselIcon },
      ],
    };
    this._onPress = this._onPress.bind(this);
  }

  _onPress(e){
    console.log(e.nativeEvent.target);
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
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
        />
      </View>

    );
  }
}

export default EventList;