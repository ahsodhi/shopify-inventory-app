import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './MainScreen';
import ProductPage from './ProductPage';

export default class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

const Routes = StackNavigator({
  MainScreen: {screen: MainScreen},
  ProductPage: {screen: ProductPage}},
  {
    initialRouteName: 'MainScreen',
    navigationOptions: {
      headerStyle: {elevation: 0, borderBottomWidth: 0.5},
      headerTitle: (<Text style={{fontSize: 20, alignSelf: 'center'}}>My Shopify Products</Text>)
    }
  }
)