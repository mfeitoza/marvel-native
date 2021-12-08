import axios from 'axios';

const BASE_URL = "https://marvel-app-femass.herokuapp.com/v1"

export const logIn = async (email, password) => {
  return await axios.post(`${BASE_URL}/authenticate`, {
    email, password
  })
}

export const getUserInfo = async (jwt) => {
  return await axios.get(`${BASE_URL}/user-info`, {
    headers: { Authorization: `Bearer ${jwt}` }
  })
}