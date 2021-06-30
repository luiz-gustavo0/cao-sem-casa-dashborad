import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_LINK_API,
});

export default api;
