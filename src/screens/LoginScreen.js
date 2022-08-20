// login screen

import React, {useRef, useContext} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {AuthContext} from '../Context/AuthContext';
import * as Keychain from 'react-native-keychain';

const LoginScreen = ({navigation}) => {
  const {login} = useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [isEmailError, setIsEmailError] = React.useState(false);
  const [isPasswordError, setIsPasswordError] = React.useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleLogin = async () => {
    // dummy login

    Keychain.setGenericPassword('token', 'token')
      .then(() => {
        console.log('success');
        login();
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleEmailChange = text => {
    setEmail(text);
    if (text.length > 0) {
      setIsEmailError(false);
    }
  };
  const handlePasswordChange = text => {
    setPassword(text);
    if (text.length > 0) {
      setIsPasswordError(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#9a73ef"
        onChangeText={handleEmailChange}
        value={email}
        onSubmitEditing={() => emailRef.current.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        ref={emailRef}
      />
      {isEmailError && (
        <Text style={styles.errorMessage}>Email is required</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#9a73ef"
        onChangeText={handlePasswordChange}
        value={password}
        onSubmitEditing={() => passwordRef.current.focus()}
        secureTextEntry={true}
        ref={passwordRef}
      />
      {isPasswordError && (
        <Text style={styles.errorMessage}>Password is required</Text>
      )}
      <Button
        title="Login"
        color="#9a73ef"
        onPress={() => handleLogin()}
        disabled={isDisabled}
      />
      {isLoading && <Text style={styles.loading}>Loading...</Text>}
      {isSuccess && <Text style={styles.success}>Success!</Text>}
      {isError && <Text style={styles.error}>Error!</Text>}
      <Button
        title="Don't have an account? Signup"
        onPress={() => navigation.navigate('Signup')}
        color="blue"
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    marginBottom: 10,
    color: '#9a73ef',
    borderBottomColor: '#9a73ef',
    borderBottomWidth: 1,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
  loading: {
    color: 'blue',
    marginBottom: 10,
  },
  success: {
    color: 'green',
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
