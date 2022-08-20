import React from 'react';
import Tabs from './TabNavigator';
import AppDataScreen from '../screens/AddDataScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const LoggedInScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        lazy: true,
      })}>
      <Stack.Screen name="HomeTabScreen" component={Tabs} />
      <Stack.Screen
        name="Expenses"
        component={AppDataScreen}
        options={{
          headerShown: false,
          lazy: true,
          animation: 'flip',
        }}
      />
    </Stack.Navigator>
  );
};

export default LoggedInScreen;
