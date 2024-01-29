import axios from 'axios';
import {
  appEnv
} from '@/helpers';

const checkEndpointAvailable = async (endpoint) => {
  const apiUrl = `${appEnv.apiUrl}/${endpoint}`;

  try {
    const response = await axios.get(apiUrl);
    if (response.data && response.data.message && response.data.message === 'slug-not-found') {
      return false;
    }
    return true;
  } catch (error) {
    console.error('Error:', error);
    return true;
  }
};

export default checkEndpointAvailable;
