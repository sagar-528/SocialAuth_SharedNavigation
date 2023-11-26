import React,{useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import {Data} from '../data/data';
import Login from '../screens/Login';
import { load } from '../utils/storage';

export type RootStackParamList = {
  Home: undefined;
  Detail: {item: Data};
};

function AppNavigtor() {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <RootStack.Navigator>
      <RootStack.Screen   name="Home"
        component={Home}
        options={{headerShown: false, 
          animation: 'slide_from_right'
        }} 
      />
      <RootStack.Screen name="Detail"
        component={Detail}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }} 
      />
    </RootStack.Navigator>
  );
}

const RootNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() =>{
    load('token').then(res => {
      if(res !== null){
        setIsLoggedIn(true)
      }
      else{
        setIsLoggedIn(false)
      }
    })  
  },[])

  return (
    <Stack.Navigator
      // initialRouteName="Login"
      screenOptions={{
        // ...TransitionPresets.SlideFromRightIOS,
      }}>
        {
          isLoggedIn === false ?
          <>
        <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false, animation: 'slide_from_right'}}
      />
      </>
          :
          <>
        <Stack.Screen
        name="Root"
        component={AppNavigtor}
        options={{headerShown: false}}
      />
      </>
    }
    </Stack.Navigator>
  );
};

export default RootNavigator;