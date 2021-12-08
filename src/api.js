import axios from 'axios';

const BASE_URL = "http://localhost:8000/v1"

export const logIn = async (email, password) => {
  return await axios.post(`${BASE_URL}/authenticate`, {
    email, password
  })
}