import React from 'react';
import { View } from 'react-native';
import About from './components/About'
import Search from './components/Search'
import { TabNavigator } from 'react-navigation'

const Tabs = TabNavigator({
  Search: { 
    screen: Search 
  },
  About: { 
    screen: About 
  }
},  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: '#000',
      style: {
        backgroundColor: '#1647E9',
      },
      indicatorStyle: {
        backgroundColor: '#FFF'
      }
    },
})

export default class App extends React.Component {
  render() {
    return (
        <Tabs/>      
    );
  }
}
