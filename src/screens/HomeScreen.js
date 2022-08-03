import {Avatar, Card, Icon} from '@rneui/base';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from '../Theme/Color';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.header}>
        <View style={styles.containerChild}>
          <Avatar
            source={{uri: 'https://picsum.photos/200/300'}}
            size="large"
            // eslint-disable-next-line react-native/no-inline-styles
            avatarStyle={{borderRadius: 20}}
          />
          <View>
            <Text style={styles.welcometext}>Welcome back,</Text>
            <Text style={styles.name}>John Doe</Text>
          </View>
        </View>
      </Card>
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
    </View>
  );
};

const styles = StyleSheet.create({
  welcometext: {
    fontSize: 18,
    marginLeft: 10,
    fontStyle: 'italic',
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
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 5,
    color: Color.primary,
  },
  header: {
    backgroundColor: Color.background,
    borderRadius: 20,
    margin: 0,
    padding: 0,
    borderWidth: 0,
    height: 100,
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
