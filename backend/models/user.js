const mongoose = require('mongoose');

// Define o esquema do usuário
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Cria o modelo
const User = mongoose.model('User', UserSchema);

module.exports = User;
