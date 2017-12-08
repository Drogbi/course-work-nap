import React, { Component } from "react";
import {TouchableOpacity, Image, View, Text, FlatList, Button } from "react-native";
import itemsListStyle from "./itemInfoStyles"
import { setViewDispatcher } from "../../actions/viewActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTileListDataDispatcher } from "../../actions/tileListActions";
import { addToCartDispatcher } from "../../actions/cartActions";
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import itemInfoStyle from './itemInfoStyles'
import addShopCartIcon from 'material-design-icons/action/drawable-xxxhdpi/ic_add_shopping_cart_white_18dp.png';

class NavTab extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <TouchableOpacity onPress={() => this.props.onPress(this.props.children)}>
        <View style={itemInfoStyle.weekDayTab}>
          <Text style={itemInfoStyle.weekDayTabText}>{this.props.children.slice(0,3)}</Text>
        </View>
      </TouchableOpacity>
    )
  }

}

class WeekDayNavigator extends Component{
  constructor(props){
    super(props);
    this.weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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
  }

  render(){
    return (
      <TouchableOpacity onPress={() =>{this.props.onPress(this.props.children)}}>
        <View style={this.props.activeTimes.includes(this.props.children) ? itemInfoStyle.activeTimeTab : itemInfoStyle.timeTab}>
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
    this.setState({activeWeekDay: weekDay, activeTimes: []});
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

  _addToCartButtonClick = () => {
    console.log('click');
    this.props.addToCartDispatcher({name: this.props.viewData.viewProps.name, week: this.state.activeWeekDay, items: this.state.activeTimes, price: this.props.viewData.viewProps.price})
  };


  render() {
    return (
      <View style={itemInfoStyle.root}>
        <TouchableOpacity  style={this.state.activeTimes.length ? itemInfoStyle.addToCartButtonEnable : itemInfoStyle.addToCartButtonDisable} onPress={ () => this._addToCartButtonClick()}>
          <Image
            resizeMode={'contain'}
            source={addShopCartIcon}
          />
        </TouchableOpacity>
        <Text style={itemInfoStyle.name}>{this.props.name}</Text>
        <Text style={itemInfoStyle.price}>{this.props.price + ' BYN'}</Text>
        <WeekDayNavigator onWeekDayPress={this._onWeekDayPress}/>
        <View style={this.state.activeWeekDay && itemInfoStyle.activeWeekDayContainer}>
          <Text style={itemInfoStyle.activeWeekDay}>{this.state.activeWeekDay}</Text>
        </View>
        <FlatList
          data={this.state.activeWeekDay && this.props.schedule[this.state.activeWeekDay.toLowerCase().slice(0, 3)].map((time) => {return {time,  activeTimes: this.state.activeTimes}})}
          numColumns = {4}
          renderItem={({item}) => (
            <TimeTab  onPress={this._toggleTime} activeTimes = {item.activeTimes}>{item.time}</TimeTab>
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
  tileListData: state.tileList.tileListData,
  cartItems: state.cart.cartItems,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addToCartDispatcher, setTileListDataDispatcher, setViewDispatcher }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemInfo);