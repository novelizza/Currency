import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Components from '../components';

const {TemplatesComponents} = Components;

const Stack = createStackNavigator();

class Navigation extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="FirstPage"
            component={TemplatesComponents.FirstTemplates}
            options={{
              headerTitle: 'Home Page',
            }}
          />
          <Stack.Screen
            name="SecondPage"
            component={TemplatesComponents.SecondTemplates}
            options={{
              headerTitle: 'Second Page',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
