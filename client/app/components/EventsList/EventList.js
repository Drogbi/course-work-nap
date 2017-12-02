import React, { Component } from "react";
import {TouchableOpacity, Image, View, Text, FlatList } from "react-native";
import carouselIcon from "../../assets/images/icons8-carousel-96.png";
import barbellIcon from "../../assets/images/icons8-barbell-96.png";
import schoolIcon from  "../../assets/images/icons8-school-96.png";
import eventsListStyle from "./eventListStyles"
import { setViewDispatcher } from "../../actions/viewActions";
import { connect } from 'react-redux';
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

  _onPress(item){
    //this.props.setViewDispatcher('SectionsList');
    console.log(item.title);
  }


  render() {
    return (
      <View style={eventsListStyle.root}>
        <FlatList
          data={this.state.data}
          numColumns = {2}
          renderItem={({item}) => (
            <TouchableOpacity style={eventsListStyle.event} onPress={() => this._onPress(item)}>
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
  view: state.view.view,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setViewDispatcher }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventList);