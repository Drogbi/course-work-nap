import React, { Component } from "react";
import {TouchableOpacity, Image, View, Text, FlatList, Button } from "react-native";
import itemsListStyle from "./itemInfoStyles"
import { setViewDispatcher } from "../../actions/viewActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTileListDataDispatcher } from "../../actions/tileListActions";
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import itemInfoStyle from './itemInfoStyles'

class NavTab extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <TouchableOpacity onPress={() => this.props.onPress(this.props.children)}>
        <View style={itemInfoStyle.weekDayTab}>
          <Text style={itemInfoStyle.weekDayTabText}>{this.props.children}</Text>
        </View>
      </TouchableOpacity>
    )
  }

}

class WeekDayNavigator extends Component{
  constructor(props){
    super(props);
    this.weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  }
  render(){
    return (
      <View style={itemInfoStyle.weekDayNav}>
        {this.weekDays.map((weekDay)=>{return(<NavTab key={weekDay} onPress={this.props.onWeekDayPress}>{weekDay}</NavTab>)})}
      </View>
    )
  }
}

class TimeTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this._onPress = this._onPress.bind(this);
  }

  _onPress(){
    this.setState({active: !this.state.active});
  }

  render(){
    return (
      <TouchableOpacity onPress={() =>{this._onPress(); this.props.onPress(this.props.children)}}>
        <View style={this.state.active ? itemInfoStyle.activeTimeTab : itemInfoStyle.timeTab}>
          <Text style ={itemInfoStyle.timeTabText}>{this.props.children}</Text>
        </View>
      </TouchableOpacity>
    )
  }

}


class ItemInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeWeekDay: '',
      activeTimes:[],
    };
    this._onWeekDayPress = this._onWeekDayPress.bind(this);
    this._toggleTime = this._toggleTime.bind(this);
  }

  _onWeekDayPress(weekDay){
    this.setState({activeWeekDay: weekDay});
  }

  _toggleTime(time){
    let _activeTimes = this.state.activeTimes.slice();
    if(_activeTimes.includes(time)){
      _activeTimes.splice(_activeTimes.indexOf(time), 1);
    } else {
      _activeTimes.push(time);
    }
    this.setState({activeTimes: _activeTimes});
    console.log(this.state.activeTimes);
  }

  render() {
    return (
      <View style={itemInfoStyle.root}>
        <Text style={itemInfoStyle.name}>{this.props.name}</Text>
        <Text style={itemInfoStyle.price}>{this.props.price + ' BYN'}</Text>
        <WeekDayNavigator onWeekDayPress={this._onWeekDayPress}/>
        <View style={itemInfoStyle.activeWeekDayContainer}>
          <Text style={itemInfoStyle.activeWeekDay}>{this.state.activeWeekDay}</Text>
        </View>
        <FlatList
          data={this.props.schedule[this.state.activeWeekDay.toLowerCase()]}
          numColumns = {4}
          renderItem={({item}) => (
            <TimeTab onPress={this._toggleTime}>{item}</TimeTab>
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
  viewData: state.view.viewData,
  tileListData: state.tileList.tileListData
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setTileListDataDispatcher, setViewDispatcher }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemInfo);