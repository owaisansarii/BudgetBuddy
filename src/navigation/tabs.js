import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import AddDataScreen from '../screens/AddDataScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icon} from '@rneui/base';
import {Color} from '../Theme/Color';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        lazy: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderRadius: 20,
          height: 60,
          position: 'absolute',
          bottom: 20,
          left: 25,
          right: 25,
          ...styles.shadow,
        },

        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'History') {
            iconName = focused ? 'chart-arc' : 'chart-arc';
          } else if (route.name === 'AddData') {
            iconName = focused ? 'plus' : 'plus';
          }
          if (route.name !== 'AddData') {
            return (
              <Icon
                name={iconName}
                size={size}
                color={color}
                type="material-community"
              />
            );
          } else {
            return (
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Icon
                    name={iconName}
                    size={size}
                    color={color}
                    type="material-community"
                  />
                </View>
              </View>
            );
          }
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AddData" component={AddDataScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
};

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

export default Tabs;
