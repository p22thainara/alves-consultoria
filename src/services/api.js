import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5293/api', // Atualizar para a porta correta do backend
});

export default api;
