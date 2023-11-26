import {NativeModules} from 'react-native';
const { RNTwitterSignIn } = NativeModules

const Constants = {
    //Dev Parse keys
    TWITTER_COMSUMER_KEY: "frqtzS4whZCPjK2yCFKV0wnVj",
    TWITTER_CONSUMER_SECRET: "4gmym4555CqG65PEoZ79pXZveFKrTRHfK1dZZvc9RuV6CtLVuv"
  }

class TwitterService {
  static async signIn(): Promise<{ authToken: string; authTokenSecret: string }> {
    try {
     await RNTwitterSignIn.init(Constants.TWITTER_COMSUMER_KEY, Constants.TWITTER_CONSUMER_SECRET)
      const result = await RNTwitterSignIn.signIn();
      return {
        authToken: result.authToken,
        authTokenSecret: result.authTokenSecret,
      };
    } catch (error) {
      throw new Error('Error signing in with Twitter');
    }
  }

  static async signOut(): Promise<void> {
    try {
      await RNTwitterSignIn.signOut();
    } catch (error) {
      throw new Error('Error signing out from Twitter');
    }
  }

  static async checkSession(): Promise<boolean> {
    try {
      const session = await RNTwitterSignIn.session();
      return !!session;
    } catch (error) {
      throw new Error('Error checking Twitter session');
    }
  }
}

export default TwitterService;
