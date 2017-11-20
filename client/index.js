import React from 'react'
import { AppRegistry } from 'react-native'
import App from './app/components/App/App'
import Authorization from './app/components/Authorization/Authorization';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import configureStore from './app/store/configureStore';
const store = configureStore();
const RouterWithRedux = connect()(Router);

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo'

const Client = () => {
  const link = new HttpLink({uri: 'http://10.0.2.2:3000/graphql' });
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    link,
    cache
  });
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="app" component={App} title="App"/>
            <Scene key="authorization" hideNavBar={true} component={Authorization}  initial = {true} />
          </Scene>
        </RouterWithRedux>
      </Provider>
    </ApolloProvider>)
};

AppRegistry.registerComponent('client', () => Client);
