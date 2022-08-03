import {Icon} from '@rneui/base';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HistoryScreen = () => {
  return (
    <View>
      <Text style={styles.text}>History !</Text>
      <Icon
        name="home"
        size={30}
        color="#900"
        type="material-community"
        // style={{margin: 10}}
      />
      <Icon
        name="access-point-check"
        size={30}
        color="#900"
        type="material-community"
        // style={{margin: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HistoryScreen;
