import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Adicione um CSS específico para login
import api from '../../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Simulando a navegação para produção ao clicar em login (sem integração com back-end por enquanto)
    navigate('/production');
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label>Senha</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="button-group">
            <button type="submit" className="login-button">Entrar</button>
            <button type="button" onClick={handleRegisterRedirect} className="register-button">Criar Conta</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
