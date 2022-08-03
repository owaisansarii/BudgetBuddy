import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HistoryScreen = () => {
  return (
    <View>
      <Text style={styles.text}>History !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HistoryScreen;
