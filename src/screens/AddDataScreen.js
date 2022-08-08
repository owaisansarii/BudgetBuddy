import {Icon} from '@rneui/base';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Color} from '../Theme/Color';
import BottomBar from '../components/BottomBar.addScreen';
import Header from '../components/Header.addScreen';

const types = [
  {
    type: 'Food',
    icon: 'food',
    color: '#FF6347',
  },
  {
    type: 'Groceries',
    icon: 'cart',
    // some different color related to all the other types
    color: '#D7BD67',
  },
  {
    type: 'Recharge',
    icon: 'cellphone',
    color: '#9269D5',
  },
  {
    type: 'Rent',
    icon: 'home',
    color: '#5c01d0',
  },
  {
    type: 'Clothes',
    icon: 'tshirt-crew',
    color: '#2F86CE',
  },
  {
    type: 'Transport',
    icon: 'car',
    color: '#8377DE',
  },
  {
    type: 'Entertainment',
    icon: 'gamepad',
    color: '#9269D5',
  },
  {
    type: 'Education',
    icon: 'book',
    color: '#5c01d0',
  },
  {
    type: 'Health',
    icon: 'heart',
    color: 'red',
  },
  {
    type: 'Other',
    icon: 'card-plus-outline',
    color: '#5c01d0',
  },
];

const Types = ({type}) => {
  return (
    <View
      style={{
        width: '33%',
        height: 100,
        alignItems: 'center',
      }}>
      <Icon
        name={type.icon}
        size={25}
        color={type.color}
        type="material-community"
        style={{
          padding: 12,
        }}
      />
      <Text
        style={{
          flex: 1,
          color: Color.black,
          fontSize: 15,
          // fontWeight: 'bold',
        }}>
        {type.type}
      </Text>
    </View>
  );
};

const AppDataScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.background,
        width: '100%',
      }}>
      <Header navigation={navigation} />
      <View
        style={{
          flex: 1,

          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {types.map((type, index) => {
          return <Types key={index} type={type} />;
        })}
      </View>
      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default AppDataScreen;
