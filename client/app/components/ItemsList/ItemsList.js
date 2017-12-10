import React, { Component } from "react";
import {TouchableOpacity, Image, View, Text, FlatList, Button } from "react-native";
import itemsListStyle from "./itemsListStyles"
import { setViewDispatcher } from "../../actions/viewActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTileListDataDispatcher } from "../../actions/tileListActions";
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import deleteIcon from 'material-design-icons/action/drawable-xxxhdpi/ic_delete_white_18dp.png';


class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this._onPress = this._onPress.bind(this);
  }

  componentDidMount(){
    this.props.getItemsQuery.refetch({variables: { token: this.props.token, title: this.props.title }})
      .then(({ data }) => {
        if(data){
          this.setState({data: data.getItems});
          console.log(this.state)
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  _onPress(item){
    this.props.setViewDispatcher('ItemInfo', item);
    console.log(item);
  }

  _onDeleteButtonPress = (name) => {
    this.props.deleteEventItem({
      variables: { token: this.props.token, name }
    });
  };


  render() {
    return (
      <View style={itemsListStyle.root}>
        <FlatList
          data={this.state.data}
          numColumns = {1}
          renderItem={({item}) => (
            <TouchableOpacity style={itemsListStyle.event} onPress = {() => this._onPress(item)}>
              <Text style={itemsListStyle.name}>{item.name}</Text>
              <Text style={itemsListStyle.price}>{item.price + ' BYN'}</Text>
              {this.props.isAdmin && <TouchableOpacity onPress={() => this._onDeleteButtonPress(item.name)} style={itemsListStyle.deleteButton}>
                <Image
                  resizeMode={'contain'}
                  source={deleteIcon}
                />
              </TouchableOpacity>}
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
        tue
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


const deleteEventItem = gql`
    mutation deleteEventItem($token: String, $name: String) {
     deleteEventItem(token: $token, name: $name)
    }
`;

const ItemsListWithQueriesAndMutations = compose(
  graphql(getItemsQuery, {name: 'getItemsQuery'}),
  graphql(deleteEventItem, {name: 'deleteEventItem'}),
)(ItemsList);


const mapStateToProps = (state) => ({
  routes: state.routes.routes,
  token: state.token.token,
  viewData: state.view.viewData,
  tileListData: state.tileList.tileListData,
  isAdmin: state.admin.isAdmin,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setTileListDataDispatcher, setViewDispatcher }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemsListWithQueriesAndMutations);