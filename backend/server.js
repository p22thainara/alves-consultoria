const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express(); // Inicializa o Express

// Middlewares
app.use(cors()); // Permite CORS
app.use(express.json()); // Habilita processamento de JSON no corpo da requisição

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Modelo do banco de dados
const User = require('./models/user'); // Importa o modelo User

// Rota para listar todos os usuários (GET)
app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Busca todos os usuários no banco
    res.status(200).json(users); // Retorna os usuários encontrados
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar usuários.', error });
  }
});

// Rota para criar um novo usuário (POST)
app.post('/users', async (req, res) => {
  try {
    const { name, email, password } = req.body; // Dados do corpo da requisição
    const newUser = new User({ name, email, password });
    await newUser.save(); // Salva no banco
    res.status(201).json({ message: 'Usuário criado com sucesso!', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar usuário.', error });
  }
});

// Porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
