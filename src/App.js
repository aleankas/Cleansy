import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Splash, Login} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './routers';
const App = () => {
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
};

export default App;
