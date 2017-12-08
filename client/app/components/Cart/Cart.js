import React, { Component } from "react";
import {ScrollView, TouchableOpacity, Image, View, Text, FlatList, Button } from "react-native";
import cartStyle from "./cartStyles"
import { setViewDispatcher } from "../../actions/viewActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTileListDataDispatcher } from "../../actions/tileListActions";
import { cleanCartDispatcher } from "../../actions/cartActions";
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  _onPayButton = () => {
    this.props.updateUserItemsMutation({
      variables: { token: this.props.token, userItems: this.props.cartItems }
    })
      .then((message) => {
      })
      .catch((error) => {
        throw error;
      });
    this.props.cleanCartDispatcher();
  };

  render() {
    return (
      <View style={cartStyle.root}>
        <ScrollView>
          {this.props.cartItems.map((cartItems,i) => (
            <View style={cartStyle.event} key={cartItems.name+i}>
              <Text style={cartStyle.name}>{cartItems.name}</Text>
              <Text style={cartStyle.week}>{cartItems.week}</Text>
              {cartItems.items.map((item, i) => (
                <Text style={cartStyle.item} key={item+i}>{item}</Text>
              ))}
              <Text style={cartStyle.price}>{cartItems.price * cartItems.items.length + ' BYN'}</Text>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity style={ this.props.cartItems.length && cartStyle.payButton} onPress={this._onPayButton} >
          <Text style={cartStyle.payText}>Pay your order</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const updateUserItemsMutation = gql`
    mutation updateUserItems($token: String, $userItems: [UserItem]) {
      updateUserItems(token: $token, userItems: $userItems)
    }
`;

const CartWithMutations = compose(
  graphql(updateUserItemsMutation, {name: 'updateUserItemsMutation'}),
)(Cart);



const mapStateToProps = (state) => ({
  routes: state.routes.routes,
  token: state.token.token,
  viewData: state.view.viewData,
  tileListData: state.tileList.tileListData,
  cartItems: state.cart.cartItems,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ cleanCartDispatcher, setTileListDataDispatcher, setViewDispatcher }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartWithMutations);