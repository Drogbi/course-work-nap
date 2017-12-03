import React, { Component } from "react";
import {TouchableOpacity, Image, View, Text, FlatList, Button } from "react-native";
import itemsListStyle from "./itemsListStyles"
import { setViewDispatcher } from "../../actions/viewActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTileListDataDispatcher } from "../../actions/tileListActions";
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount(){
    this.props.getItemsQuery.refetch({variables: { token: this.props.token, title: this.props.title }})
      .then(({ data }) => {
        if(data){
          this.setState({data: data.getItems});
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  render() {
    return (
      <View style={itemsListStyle.root}>
        <FlatList
          data={this.state.data}
          numColumns = {1}
          renderItem={({item}) => (
            <TouchableOpacity style={itemsListStyle.event}>
              <Text style={itemsListStyle.eventTitle}>{item.name}</Text>
              <Text style={itemsListStyle.eventTitle}>{item.price}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.name}
        />
      </View>

    );
  }
}

const getItemsQuery = gql`
    query getItems($token: String, $title: String) {
     getItems(token: $token, title: $title) {
      name
      section
      schedule {
        mon
        thu
        wed
        thu
        fri
        sat
        sun
      }
      price
      }
    }
`;

const ItemsListWithQueries = compose(
  graphql(getItemsQuery, {name: 'getItemsQuery'})
)(ItemsList);


const mapStateToProps = (state) => ({
  routes: state.routes.routes,
  token: state.token.token,
  viewData: state.view.viewData,
  tileListData: state.tileList.tileListData
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setTileListDataDispatcher, setViewDispatcher }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemsListWithQueries);