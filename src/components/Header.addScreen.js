import {Button, Icon} from '@rneui/base';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Color} from '../Theme/Color';
import BottomBar from '../components/BottomBar.addScreen';
import moment from 'moment';

const Header = ({navigation, onSubmit, title, date}) => {
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
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            flex: 1,
            color: Color.black,
            fontSize: 21,
            // fontWeight: 'bold',
            paddingLeft: 20,
          }}>
          {title}
        </Text>
        <View
          style={{
            right: 10,
          }}>
          <Text
            style={{
              color: Color.text,
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            {moment(date).format('MMM DD,')}
          </Text>
          <Text
            style={{
              color: Color.text,
              fontSize: 15,
            }}>
            {moment(date).format('hh:mm a')}
          </Text>
        </View>
      </View>
      <Button
        containerStyle={{
          width: 100,
          marginRight: 20,
          borderRadius: 10,
          justifyContent: 'flex-end',
        }}
        style={{}}
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
