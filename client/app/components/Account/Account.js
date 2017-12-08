import React, { Component } from "react";
import {ScrollView, TouchableOpacity, Image, View, Text, FlatList, Button } from "react-native";
import accountStyle from "./accountStyles"
import { setViewDispatcher } from "../../actions/viewActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTileListDataDispatcher } from "../../actions/tileListActions";
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount(){
    this.props.getAccountDataQuery.refetch({variables: { token: this.props.token }})
      .then(({ data }) => {
        if(data){
          this.setState({data: data.getAccountData});
          console.log(this.state)
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  render() {
    return (
      <View style={accountStyle.root}>
        <ScrollView>
          <Text style={accountStyle.accountName}>{this.state.data.email}</Text>
          <Text style={accountStyle.history}>History:</Text>
          {this.state.data.items && this.state.data.items.map((items,i) => (
            <View style={accountStyle.event} key={items.name+i}>
              <Text style={accountStyle.name}>{items.name}</Text>
              <Text style={accountStyle.week}>{items.week}</Text>
              {items.items.map((item, i) => (
                <Text style={accountStyle.item} key={item+i}>{item}</Text>
              ))}
              <Text style={accountStyle.price}>{items.price * items.items.length + ' BYN'}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

    );
  }
}

const getAccountDataQuery = gql`
    query getAccountData($token: String) {
     getAccountData(token: $token) {
      email
      items{
      name
      week
      items
      price
    }
      }
    }
`;

const AccountWithQueries = compose(
  graphql(getAccountDataQuery, {name: 'getAccountDataQuery'})
)(Account);




const mapStateToProps = (state) => ({
  routes: state.routes.routes,
  token: state.token.token,
  viewData: state.view.viewData,
  tileListData: state.tileList.tileListData,
  cartItems: state.cart.cartItems,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setTileListDataDispatcher, setViewDispatcher }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AccountWithQueries);