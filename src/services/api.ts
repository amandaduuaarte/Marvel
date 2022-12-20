import axios from 'axios';

const url = 'http://localhost:3030/v1' || 'http://143.255.182.112:3030/v1';
export const api = axios.create({
  baseURL: 'http://10.0.2.2:3030/v1',
  // So funciona no simulador
});
