import {Button, Icon} from '@rneui/base';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Color} from '../Theme/Color';
import BottomBar from '../components/BottomBar.addScreen';

const Header = ({navigation, onSubmit}) => {
  return (
    <View
      style={{
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Icon
        name="arrow-left"
        size={25}
        color={'black'}
        type="material-community"
        style={{
          padding: 12,
          justifyContent: 'flex-start',
        }}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text
        style={{
          flex: 1,
          color: Color.black,
          fontSize: 21,
          // fontWeight: 'bold',
          paddingLeft: 20,
        }}>
        Expenses
      </Text>
      <Button
        containerStyle={{
          width: 100,
          marginRight: 20,
          borderRadius: 10,
        }}
        buttonStyle={{
          backgroundColor: Color.primary,
        }}
        onPress={onSubmit}
        title="Add"
      />
    </View>
  );
};

export default Header;
