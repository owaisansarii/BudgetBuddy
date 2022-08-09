import React from 'react';
import {StyleSheet} from 'react-native';
import {Color} from '../Theme/Color';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from '@rneui/themed';
const BottomBar = ({
  onDescriptionChange,
  onAmountChange,
  description,
  amount,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[Color.secondary, Color.primary]}
      style={styles.container}>
      <Input
        placeholder="Memo"
        value={description}
        placeholderTextColor={'#6A6969'}
        leftIcon={{
          type: 'material-community',
          name: 'notebook-plus-outline',
          style: {paddingBottom: 5},
        }}
        style={styles.ipStyle}
        inputContainerStyle={styles.ipContainerStyle}
        inputStyle={styles.inputStyle}
        onChangeText={onDescriptionChange}
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={[styles.inputContainerStyle, {flex: 1}]}
      />
      <Input
        placeholder="0"
        value={amount}
        keyboardType="decimal-pad"
        placeholderTextColor={Color.white}
        style={styles.ipStyle}
        inputContainerStyle={styles.ipContainerStyle}
        inputStyle={styles.inputStyle}
        containerStyle={styles.inputContainerStyle}
        onChangeText={onAmountChange}
      />
    </LinearGradient>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  ipStyle: {
    fontSize: 21,
    paddingLeft: 10,
  },
  ipContainerStyle: {
    borderBottomWidth: 0,
    // paddingHorizontal: 5,
    // backgroundColor: '#ececec',
    borderRadius: 10,
    height: 45,
  },
  inputStyle: {
    fontSize: 14,
    color: Color.white,
    fontWeight: 'bold',
  },
  inputContainerStyle: {
    backgroundColor: '',
    flex: 0.5,
    // marginRight: '3%',
    height: 40,
    borderRadius: 10,
  },
});
