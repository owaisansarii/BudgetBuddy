/* eslint-disable react-native/no-inline-styles */
import {Icon} from '@rneui/base';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Color} from '../Theme/Color';
import BottomBar from '../components/BottomBar.addScreen';
import Header from '../components/Header.addScreen';
import Realm from 'realm';
import ItemSchema from '../Schema/ItemSchema';
import {v5 as uuidv5} from 'uuid';

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

const Types = ({type, onTypePress, selectedType}) => {
  return (
    <Pressable
      style={{
        width: '33%',
        height: 100,
        alignItems: 'center',
        backgroundColor:
          selectedType === type.type ? Color.white : Color.background,
      }}
      onPress={() => {
        onTypePress(type.type);
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
    </Pressable>
  );
};

const AppDataScreen = ({navigation}) => {
  const [selectedType, setSelectedType] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [description, setDescription] = React.useState('');
  // const realm = new Realm({schema: [ItemSchema]});
  const realm = React.useRef(null);
  useEffect(() => {
    realm.current = new Realm({schema: [ItemSchema]});
    navigation.setOptions({
      header: () => (
        <Header
          title="Add Data"
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    });
    return () => {
      realm.current.close();
    };
  }, [navigation]);
  const onTypePress = type => {
    setSelectedType(type);
  };
  const onAmountChange = amt => {
    setAmount(amt);
  };
  const onDescriptionChange = text => {
    setDescription(text);
  };

  const onSubmit = async () => {
    // choose automatic date and time
    const date = new Date();
    const time = date.toLocaleTimeString();
    const dateString = date.toLocaleDateString();
    const _id = uuidv5(dateString + time, uuidv5.DNS);
    const item = {
      _id,
      type: selectedType,
      amount: parseFloat(amount),
      description,
      date: dateString,
    };
    const item2 = realm.current.write(() => {
      realm.current.create('Item', item);
    });
    console.log(item2);
    navigation.goBack();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.background,
        width: '100%',
      }}>
      <Header navigation={navigation} onSubmit={onSubmit} />
      <View
        style={{
          flex: 1,

          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {types.map((type, index) => {
          return (
            <Types
              key={index}
              type={type}
              onTypePress={onTypePress}
              selectedType={selectedType}
            />
          );
        })}
      </View>
      <BottomBar
        onDescriptionChange={onDescriptionChange}
        onAmountChange={onAmountChange}
        description={description}
        amount={amount}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default AppDataScreen;
