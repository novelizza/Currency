import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import React, {Component} from 'react';
import Navigator from './src/navigation';

class App extends Component {
  render() {
    return <Navigator />;
  }
}

AppRegistry.registerComponent(appName, () => App);
