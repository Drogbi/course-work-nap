import React from 'react'
import {Image, AsyncStorage, AppRegistry } from 'react-native'
import App from './app/components/App/App'
import Authorization from './app/components/Authorization/Authorization';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import configureStore from './app/store/configureStore';
const store = configureStore();
const RouterWithRedux = connect()(Router);
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo'
import Main from "./app/components/Main/Main";
import homeIcon from 'material-design-icons/action/drawable-xxxhdpi/ic_home_white_18dp.png';


const Client =  () => {
  const httpLink = new HttpLink({uri: 'http://10.0.2.2:3000/graphql' });
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root" >
            <Stack tabs={true} showLabel={true} tabBarPosition={'bottom'} activeTintColor={'#5e98d1'}>
              <Scene key="main" icon={()=>(<Image source={homeIcon}/>)} hideNavBar={true} component={Main} title="Main"/>
            </Stack>
            <Scene key="app" hideNavBar={true} component={App} title="App"  initial = {true}/>
            <Scene key="authorization" hideNavBar={true} component={Authorization}  />
          </Scene>
        </RouterWithRedux>
      </Provider>
    </ApolloProvider>)
};

AppRegistry.registerComponent('client', () => Client);
