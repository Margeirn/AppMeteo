import React from 'react';
import Home from './components/Home'
import Constants from 'expo'
import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';


export default class App extends React.Component {
  render() {
    return (
        <StyleProvider style={getTheme(platform)}>
          <Home style={{ paddingTop: Constants.statusBarHeight }}/>
        </StyleProvider>
    );
  }
}
