import React, {createContext, useEffect, useState} from 'react';
import * as Keychain from 'react-native-keychain';
const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = async () => {
    setIsLoading(true);
    try {
      //   get token from keychain
      const token = await Keychain.getGenericPassword();
      console.log('tokenss', token);
      setUserToken(token);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const logout = () => {
    setUserToken(null);
    setIsLoading(false);
  };
  const getToken = async () => {
    const token = await Keychain.getGenericPassword();
    console.log('tokenss', token);
    setUserToken(token.password);
  };
  useEffect(() => {
    getToken();
  }, []);

  return (
    <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
