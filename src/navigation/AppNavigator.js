import React, {useContext} from 'react';
import {Text} from 'react-native';
import LoggedInScreen from './LoggedInScreen';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../Context/AuthContext';
import AuthScreen from './LoggedOutScreen';

const AppNavigator = () => {
  const {userToken, isLoading} = useContext(AuthContext);
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return (
    <NavigationContainer>
      {userToken ? <LoggedInScreen /> : <AuthScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
