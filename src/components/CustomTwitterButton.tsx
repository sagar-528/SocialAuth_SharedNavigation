// src/components/CustomTwitterButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import TwitterService from '../services/TwitterService';
import {NativeModules} from 'react-native';
const { RNTwitterSignIn } = NativeModules
import TwitterAuthService from '../services/TwitterAuthServies';
import { saveString, save } from '../utils/storage';
import { displayToast } from '../utils/displayToast';

interface CustomTwitterButtonProps {
  onLoginSuccess: () => void;
}

const CustomTwitterButton: React.FC<CustomTwitterButtonProps> = ({ onLoginSuccess }) => {
  
    const handleTwitterLogin = async () => {
    try {
      const token = await TwitterAuthService.getBearerToken()  
      console.log(token);
      save('token', token)
      displayToast('login successfully')
      onLoginSuccess();
      const { authToken, authTokenSecret } = await RNTwitterSignIn.logIn();
      // Save the auth tokens or use them as needed
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handleTwitterLogin}>
      <Text style={styles.buttonText}>Login with Twitter</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1DA1F2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
  },
});

export default CustomTwitterButton;
