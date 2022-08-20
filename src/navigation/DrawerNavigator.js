/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';

import AddDataScreen from '../screens/AddDataScreen';
import {Icon} from '@rneui/base';
import {Color} from '../Theme/Color';
import {useNavigation} from '@react-navigation/native';
// import {useColorScheme} from 'react-native-appearance';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthProvider} from '../Context/AuthContext';

import LoggedInScreen from './LoggedInScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Drawer.Navigator
          //   drawerContentOptions={{
          //     activeTintColor: Color.primary,
          //     inactiveTintColor: Color.text,
          //     itemStyle: {
          //       borderRadius: 20,
          //       height: 60,
          //       ...styles.shadow,
          //     },
          //     labelStyle: {
          //       fontSize: 18,
          //       fontWeight: 'bold',
          //     },
          //   }}
          //   drawerStyle={{
          //     // backgroundColor: isDarkMode ? Color.dark : Color.light,
          //     borderRadius: 20,
          //     height: 60,
          //     ...styles.shadow,
          //   }}
          //   drawerContent={props => {
          //     return (
          //       <View
          //         style={{
          //           flex: 1,
          //           justifyContent: 'center',
          //           alignItems: 'center',
          //         }}>
          //         <Icon
          //           name="menu"
          //           size={30}
          //           color={Color.primary}
          //           type="material-community"
          //         />
          //       </View>
          //     );
          //   }}
          initialRouteName="Tabs">
          <Drawer.Screen name="LoggedInScreen" component={LoggedInScreen} />
          <Drawer.Screen name="History" component={HistoryScreen} />
          <Drawer.Screen name="AddData" component={AddDataScreen} />
        </Drawer.Navigator>
      </AuthProvider>
    </SafeAreaProvider>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 15,
  },
  centeredView: {
    top: -10,
    height: 40,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.background,
    // backgroundColor: 'gold',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  modalView: {
    position: 'absolute',
    top: -20,
    height: 50,
    width: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 200,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
