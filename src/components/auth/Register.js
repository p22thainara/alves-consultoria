import React, { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom'; // Remova o userNavigate

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Apenas useNavigate está correto

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Fazendo a requisição para a API de registro
      const response = await api.post('/users/register', { name, email, password });
      if (response.status === 200) {
        setMessage('Usuário registrado com sucesso!');
      } else {
        setMessage('Erro ao registrar usuário.');
      }
    } catch (err) {
      setMessage('Erro ao registrar usuário. Verifique os dados ou tente novamente.');
    }
  };

  const handleBackToLogin = () => {
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister}>
        <div>
          <label>Nome</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Senha</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Registrar</button>
        <button type="button" className='back-button' onClick={handleBackToLogin}>
            Voltar para o Login
        </button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Register;
