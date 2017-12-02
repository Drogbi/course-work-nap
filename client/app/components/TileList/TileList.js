import React, { Component } from "react";
import {TouchableOpacity, Image, View, Text, FlatList } from "react-native";
import tileListStyle from "./tileListStyles"
import { setViewDispatcher } from "../../actions/viewActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTileListDataDispatcher } from "../../actions/tileListActions";

class EventList extends Component {
  constructor(props) {
    super(props);
    this._onPress = this.props.tileListData._onPress.bind(this);
  }


  render() {
    return (
      <View style={tileListStyle.root}>
        <FlatList
          data={this.props.tileListData.items}
          numColumns = {2}
          renderItem={({item}) => (
            <TouchableOpacity style={tileListStyle.event} onPress={() => this._onPress(item)}>
              <Image
                style={tileListStyle.eventImage}
                source={item.icon}
              />
              <Text style={tileListStyle.eventTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.title}
        />
      </View>

    );
  }
}

const mapStateToProps = (state) => ({
  routes: state.routes.routes,
  token: state.token.token,
  view: state.view.view,
  tileListData: state.tileList.tileListData
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setTileListDataDispatcher, setViewDispatcher }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventList);