/* eslint-disable react-native/no-inline-styles */
import {Icon} from '@rneui/base';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Dimensions,
  Animated,
  ScrollView,
} from 'react-native';
import {Color} from '../Theme/Color';
import BottomBar from '../components/BottomBar.addScreen';
import Header from '../components/Header.addScreen';
import Realm from 'realm';
import ItemSchema from '../Schema/ItemSchema';
import {v5 as uuidv5} from 'uuid';
import DateTimePicker from '@react-native-community/datetimepicker';

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

const TAB_WIDTH = Dimensions.get('window').width / 1.5;
const headers = ['Income', 'Expense'];

const Types = ({type, onTypePress, selectedType}) => {
  return (
    <Pressable
      style={{
        width: '33%',
        height: 85,
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
  const [date, setDate] = React.useState(new Date());
  const [amount, setAmount] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [selectedHeader, setSelectedHeader] = React.useState(headers[0]);
  const tabRef = React.useRef(null);
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

  const animatedPosition = React.useRef(new Animated.Value(0)).current;

  const onHeaderPress = header => {
    setSelectedHeader(header);
    tabRef.current.scrollToIndex({
      index: header === headers[0] ? 0 : 1,
      animated: true,
    });
    Animated.timing(animatedPosition, {
      toValue:
        header === headers[0]
          ? 0
          : Dimensions.get('window').width - TAB_WIDTH - 2,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const onChange = ({nativeEvent}) => {
    const {contentOffset} = nativeEvent;
    if (contentOffset.x === 0) {
      onHeaderPress(headers[0]);
    } else {
      onHeaderPress(headers[1]);
    }
  };
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };
  const onDatePress = () => {
    console.log('onDatePress', showDatePicker);
    setShowDatePicker(true);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.background,
        width: '100%',
      }}>
      {showDatePicker ? (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          onChange={onDateChange}
          // style={{
          //   width: 320,
          //   backgroundColor: 'red',
          //   position: 'absolute',
          //   top: 0,
          //   left: 0,
          //   right: 0,
          //   bottom: 0,
          //   alignItems: 'center',
          //   justifyContent: 'center',
          // }} //add this
        />
      ) : null}
      <Header
        navigation={navigation}
        onSubmit={onSubmit}
        title={selectedHeader}
        date={date}
      />
      {/* tabs */}
      <View
        style={[
          styles.tabs,
          {
            width: TAB_WIDTH,
          },
        ]}>
        {headers.map((header, index) => (
          <Text
            style={{
              color: selectedHeader === header ? Color.white : Color.black,
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              flex: 1,
              zIndex: 1,
              // backgroundColor: '#fff',
              padding: 10,
            }}
            onPress={() => {
              onHeaderPress(header);
            }}>
            {header}
          </Text>
        ))}
        <Animated.View
          style={{
            width: TAB_WIDTH / 2,
            backgroundColor: Color.primary,
            position: 'absolute',
            height: '100%',
            borderRadius: 8,
            zIndex: -1,
            transform: [
              {
                translateX: animatedPosition,
              },
            ],
          }}
        />
      </View>
      <FlatList
        onMomentumScrollEnd={onChange}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="always"
        ref={tabRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={headers}
        pagingEnabled
        onM
        decelerationRate={'fast'}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
        // scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: Dimensions.get('window').width,
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
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
            </View>
          );
        }}
      />
      <BottomBar
        onDescriptionChange={onDescriptionChange}
        onAmountChange={onAmountChange}
        description={description}
        amount={amount}
        onDatePress={onDatePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  tabs: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
    borderColor: Color.primary,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default AppDataScreen;
