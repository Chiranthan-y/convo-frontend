import axios from 'axios';

const base = axios.create({
  baseURL: 'http://192.168.0.104:9090/api',
});

export default base;
