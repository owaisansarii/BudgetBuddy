import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AppDataScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Add data here!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default AppDataScreen;
