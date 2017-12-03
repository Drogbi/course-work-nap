import React, { Component } from "react";
import {TouchableOpacity, Image, View, Text, FlatList } from "react-native";
import tileListStyle from "./itemsListStyles"
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
      data: {},
    }
  }

  componentDidMount(){
    this.props.getItemsQuery({variables: { token: this.props.token, title: this.props.title }})
      .then(({ data }) => {
        if(data){
          this.setState({data});
          console.log(data);
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  render() {
    return (
      <View style={tileListStyle.root}>
        {/*<FlatList*/}
          {/*data={this.props.tileListData.items}*/}
          {/*numColumns = {2}*/}
          {/*renderItem={({item}) => (*/}
            {/*<TouchableOpacity style={tileListStyle.event} onPress={() => this.props.tileListData._onPress.call(this, item)}>*/}
              {/*<Image*/}
                {/*style={tileListStyle.eventImage}*/}
                {/*source={item.icon}*/}
              {/*/>*/}
              {/*<Text style={tileListStyle.eventTitle}>{item.title}</Text>*/}
            {/*</TouchableOpacity>*/}
          {/*)}*/}
          {/*keyExtractor={item => item.title}*/}
        {/*/>*/}
      </View>

    );
  }
}


const getItemsQuery = gql`
    query getItems($token: String, $title: String) {
     getItems(token: $token, title: $title) {
        data
      }
    }
`;

const ItemsListWithQueries = compose(
  graphql(getItemsQuery, {name: 'getItemsQuery'}),
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