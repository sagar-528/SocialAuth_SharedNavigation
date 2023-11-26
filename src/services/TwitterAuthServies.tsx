// src/services/TwitterAuthService.ts
import axios from 'axios';
import { Buffer } from "buffer";

class TwitterAuthService {
  private static readonly BASE_URL = 'https://api.twitter.com/oauth2/token';
  private static readonly API_KEY = 'frqtzS4whZCPjK2yCFKV0wnVj';
  private static readonly API_SECRET_KEY = '4gmym4555CqG65PEoZ79pXZveFKrTRHfK1dZZvc9RuV6CtLVuv';

  static async getBearerToken(): Promise<string> {
    const credentials = `${this.API_KEY}:${this.API_SECRET_KEY}`;
    const base64Credentials = Buffer.from(credentials).toString('base64');

    const headers = {
      Authorization: `Basic ${base64Credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    };

    const data = 'grant_type=client_credentials';

    try {
      const response = await axios.post(this.BASE_URL, data, { headers });
      return response.data.access_token;
    } catch (error) {
      throw new Error(`Error obtaining Bearer Token: ${error.message}`);
    }
  }
}

export default TwitterAuthService;
