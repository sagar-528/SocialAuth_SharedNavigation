// src/screens/LoginScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import CustomTwitterButton from '../components/CustomTwitterButton';
import TwitterService from '../services/TwitterService';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const LoginScreen: React.FC = () => {
  const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // useEffect(() => {
  //   checkTwitterSession();
  // }, []);

  // const checkTwitterSession = async () => {
  //   try {
  //     const isSessionActive = await TwitterService.checkSession();
  //     console.log(isSessionActive);    
  //     setIsLoggedIn(isSessionActive);
  //   } catch (error) {
  //     // console.error(error.message);
  //     console.log(error);
  //   }
  // };

  const handleLoginSuccess = () => {
    // navigation.navigate('Root')
    navigation.reset({
      index: 0,
      routes: [{name: 'Root'}],
    })
  };

  return (
    <View style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{marginBottom: 10}}>Login Screen</Text>
          <CustomTwitterButton onLoginSuccess={handleLoginSuccess} />
        </View>
    </View>
  );
};

export default LoginScreen;
