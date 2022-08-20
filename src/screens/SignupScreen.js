// signup screen
import React, {useRef} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
// import {AuthContext} from '../Context/AuthContext';

const SignupScreen = ({navigation}) => {
  //   const {signup} = useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [isConfirmPasswordError, setIsConfirmPasswordError] =
    React.useState(false);
  const [isEmailError, setIsEmailError] = React.useState(false);
  const [isPasswordError, setIsPasswordError] = React.useState(false);

  const handleSignup = async () => {
    // dummy signup
    setIsLoading(true);
    setIsSuccess(true);
    setIsError(false);
    setIsDisabled(true);
    setIsConfirmPasswordError(false);
    setIsEmailError(false);
    setIsPasswordError(false);
    setErrorMessage('');
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(false);
      setIsError(false);
      setIsDisabled(false);
      setIsConfirmPasswordError(false);
      setIsEmailError(false);
      setIsPasswordError(false);
      setErrorMessage('');
      navigation.navigate('HomeTabScreen');
    }, 2000);
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
  const handleConfirmPasswordChange = text => {
    setConfirmPassword(text);
    if (text.length > 0) {
      setIsConfirmPasswordError(false);
    }
  };
  const handleSignupPress = () => {
    if (password !== confirmPassword) {
      setIsConfirmPasswordError(true);
      setErrorMessage('Password and Confirm Password do not match');
      setIsDisabled(true);
    } else if (password.length < 6) {
      setIsPasswordError(true);
      setErrorMessage('Password must be at least 6 characters');
      setIsDisabled(true);
    } else if (email.length < 6) {
      setIsEmailError(true);
      setErrorMessage('Email must be at least 6 characters');
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
      setIsConfirmPasswordError(false);
      setIsEmailError(false);
      setIsPasswordError(false);
      setErrorMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signup</Text>
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleEmailChange}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter your email"
        returnKeyType="next"
        // onSubmitEditing={() => passwordInput.focus()}
        blurOnSubmit={false}
      />
      {isEmailError && <Text style={styles.error}>Email is required</Text>}
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={handlePasswordChange}
        value={password}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter your password"
        returnKeyType="next"
        // onSubmitEditing={() => confirmPasswordInput.focus()}
        blurOnSubmit={false}
      />
      {isPasswordError && (
        <Text style={styles.error}>Password is required</Text>
      )}
      <Text style={styles.text}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleConfirmPasswordChange}
        value={confirmPassword}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Confirm your password"
        returnKeyType="done"
        onSubmitEditing={handleSignupPress}
        blurOnSubmit={true}
      />
      {isConfirmPasswordError && (
        <Text style={styles.error}>
          Password and Confirm Password do not match
        </Text>
      )}
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      <Button
        title="Signup"
        onPress={handleSignup}
        disabled={isDisabled}
        loading={isLoading}
        success={isSuccess}
        error={isError}
      />
      <Button
        title="Already have an account? Login"
        onPress={() => navigation.navigate('Login')}
        color="blue"
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
