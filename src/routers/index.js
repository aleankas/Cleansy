import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Login, VerifikasiOTP,Home} from '../pages';

const Stack = createStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifikasiOTP"
        component={VerifikasiOTP}
        options={{headerShown: false}}
      />
			<Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Routers;
