import {Avatar, Card, Icon} from '@rneui/base';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from '../Theme/Color';
import Realm from 'realm';
import ItemSchema from '../Schema/ItemSchema';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

const types = {
  Food: {
    icon: 'food',
    color: '#FF6347',
    light: '#FD9582',
  },
  Groceries: {
    icon: 'cart',
    color: '#D7BD67',
    light: '#E0D8B7',
  },
  Recharge: {
    icon: 'cellphone',
    color: '#9269D5',
    light: '#A8A8A8',
  },
  Rent: {
    icon: 'home',
    color: '#5c01d0',
    light: '#6b0fdf',
  },
  Clothes: {
    icon: 'tshirt-crew',
    color: '#2F86CE',
    light: '#4a8adc',
  },
  Transport: {
    icon: 'car',
    color: '#8377DE',
    light: '#a087de',
  },
  Entertainment: {
    icon: 'gamepad',
    color: '#9269D5',
    light: '#a087de',
  },
  Education: {
    icon: 'book',
    color: '#5c01d0',
    light: '#6b0fdf',
  },
  Health: {
    icon: 'heart',
    color: 'red',
    light: '#ff5252',
  },
  Other: {
    icon: 'card-plus-outline',
    color: '#5c01d0',
    light: '#6b0fdf',
  },
};

const Transaction = ({item}) => {
  const [date, setDate] = React.useState();
  React.useEffect(() => {
    // set date as today or yesterday if it is today or yesterday else set date as the date of the transaction
    if (item?.date) {
      console.log(moment().startOf('day'));
      setDate(
        moment(item.date).startOf('day').isSame(moment().startOf('day'))
          ? 'Today'
          : moment(item.date)
              .startOf('day')
              .isSame(moment().subtract(1, 'days').startOf('day'))
          ? 'Yesterday'
          : moment(item.date).format('MMM DD, YYYY'),
      );
    }
  }, [item?.date]);

  return (
    <View
      style={{
        // height: 80,
        width: '100%',
        // backgroundColor: 'red',
        borderRadius: 10,
        marginTop: 15,
        flexDirection: 'row',
        // elevation: 5,
        padding: 10,
        // backgroundColor: ,
        // alignItems: 'center',
      }}>
      {/* icon as image*/}
      <View
        style={{
          height: 50,
          width: 50,
          borderRadius: 10,
          alignItems: 'center',
          backgroundColor: types[item.type].light,
          justifyContent: 'center',
        }}>
        <Icon
          name={types[item.type].icon}
          size={25}
          color={types[item.type].color}
          type="material-community"
          style={{
            padding: 12,
          }}
        />
      </View>
      <View
        style={{
          marginHorizontal: 15,
          flex: 2,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: '500',
            letterSpacing: 0.1,
            width: '100%',
          }}
          numberOfLines={1}
          ellipsizeMode="tail">
          {item.description}
        </Text>
        <Text
          style={{
            color: Color.gray,
          }}>
          {item.type}
        </Text>
      </View>
      <View
        style={{
          marginLeft: 15,

          flex: 1.5,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: '500',

            textAlign: 'right',
          }}>
          +{item.amount}
        </Text>
        <Text
          style={{
            color: Color.gray,
            textAlign: 'right',
          }}>
          {date}
        </Text>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const realm = React.useRef(null);
  const [itemArr, setItemArr] = React.useState([]);
  React.useEffect(() => {
    realm.current = new Realm({schema: [ItemSchema]});
    if (realm.current) {
      const items = realm.current.objects('Item').slice(0, 10).reverse();
      setItemArr(items);
    }
    return () => {
      // realm.current.close();
      // items.removeListener(listener);
    };
  }, []);
  const navigation = useNavigation();

  function listener(items, changes) {
    changes.insertions.forEach(index => {
      console.log(items[index]);
    });
    changes.deletions.forEach(index => {
      console.log(items[index]);
    });
  }

  return (
    <>
      <View style={styles.containerChild}>
        <Avatar
          source={{uri: 'https://picsum.photos/200/300'}}
          size={'50'}
          // eslint-disable-next-line react-native/no-inline-styles
          avatarStyle={{borderRadius: 15}}
          onPress={() => navigation.openDrawer()}
        />
        <View>
          {/* <Text style={styles.welcometext}>Welcome back,</Text> */}
          <Text style={styles.name}>John Doe</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[Color.primary, Color.secondary]}
            style={styles.mainContainer}>
            <Text style={styles.totalBalance}>Total Balance</Text>
            <Text style={styles.balance}>₹1000</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
                backgroundColor: Color.card,
                width: '80%',
                padding: 10,
                borderRadius: 10,
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="arrow-down"
                    size={20}
                    color={'lightgreen'}
                    type="material-community"
                  />
                  <Text>Income</Text>
                </View>

                <Text
                  style={{
                    color: Color.white,
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  ₹1000
                </Text>
              </View>
              <View
                style={{
                  height: 50,
                  width: 1,
                  backgroundColor: Color.secondary,
                }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="arrow-up"
                    size={20}
                    color={'red'}
                    type="material-community"
                  />
                  <Text>Expense</Text>
                </View>

                <Text
                  style={{
                    color: Color.white,
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  ₹1000
                </Text>
              </View>
            </View>
          </LinearGradient>
          {/* recent */}
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Recent Transactions
            </Text>
            <Text
              style={{
                color: Color.primary,
                fontSize: 20,
                fontWeight: '500',
              }}
              onPress={() => {
                console.log('Mujhe dabaya gaya hai');
              }}>
              See all
            </Text>
          </View>
          {itemArr?.map((item, index) => {
            return <Transaction key={index} item={item} />;
          })}
          {/* new */}
        </View>
        {/* <View
        style={{
          height: 40,
        }}
      /> */}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  welcometext: {
    fontSize: 15,
    marginLeft: 10,
    fontFamily: 'Roboto',
    letterSpacing: 1,
    color: Color.gray,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Color.background,
    paddingTop: 25,
    paddingHorizontal: 25,
  },
  containerChild: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    // fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 2,
    color: Color.primary,
  },
  header: {
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 0,
    // padding: 0,
    borderWidth: 0,
    height: 70,
    elevation: 0,
    //   ...styles.shadow,
  },
  mainContainer: {
    height: 200,
    backgroundColor: Color.primary,
    borderRadius: 20,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  totalBalance: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  balance: {
    color: '#fff',
    fontSize: 35,
    letterSpacing: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
