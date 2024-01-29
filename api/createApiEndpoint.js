import axios from 'axios';
import {
  appEnv
} from '@/helpers';

const createApiEndpoint = async (endpoint, response) => {
  try {
    const res = await axios.post(`${appEnv.apiUrl}/`, {
      slug: endpoint,
      description: response
    });

    return res.data;
  } catch (err) {
  }
};

export default createApiEndpoint;
