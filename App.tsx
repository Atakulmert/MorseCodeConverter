import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Encode from './src/screens/Encode';
import Decode from './src/screens/Decode';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{ headerShown: false }}name="Home" component={Home} />
        <Stack.Screen options={{
            headerTitle: '', // Hides the header title
            headerStyle: {
              backgroundColor: '#52e599', // Set header background color
              borderBottomWidth:5,
              borderBottomColor:'#9fe2b1'
            },
            headerTintColor: '#fff', // Set color for header items like the back button
          }} name="Encode" component={Encode} />
        <Stack.Screen  options={{
            headerTitle: '', // Hides the header title
            headerStyle: {
              backgroundColor: '#52e599', // Set header background color
              borderBottomWidth:5,
              borderBottomColor:'#9fe2b1'
            },
            headerTintColor: '#fff', // Set color for header items like the back button
          }} name="Decode" component={Decode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
