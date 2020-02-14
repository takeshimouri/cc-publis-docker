import axios from 'axios';
import { Auth } from '../../types/models';
import { AUTH_API_HOST, AUTH_API_PORT } from '../../config/constants'

const baseUrl = `http://${AUTH_API_HOST}:${AUTH_API_PORT}/auth`;

export async function loginAuthApi(loginID: string, password: string) {
  try {
    const res = await axios.post<Auth>(`${baseUrl}/login`, { email: loginID, password: password });
    return res.data;
  } catch (res) {
    const error = res.response;
    throw error;
  }
}

export async function logoutAuthApi() {
  try {
    const res = await axios.get(`${baseUrl}/logout`);
    return res.data;
  } catch (res) {
    const error = res.response;
    throw error;
  }
}
