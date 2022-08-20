import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
const AuthScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        lazy: true,
      })}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthScreen;
