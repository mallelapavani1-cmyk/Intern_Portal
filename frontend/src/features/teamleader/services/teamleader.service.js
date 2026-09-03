import axios from 'axios';

const teamleaderApi = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export const createIntern = async (payload) => {
  try {
    const response = await teamleaderApi.post('/api/teamleader/create-intern', payload);
    return response.data;
  } catch (error) {
    const data = error.response?.data;
    const validationMessage = data?.errors?.map(({ msg }) => msg).join(' ');
    throw new Error(validationMessage || data?.message || 'Unable to create intern.', { cause: error });
  }
};