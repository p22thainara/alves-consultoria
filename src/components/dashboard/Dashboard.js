import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  // Função para sair e redirecionar para a tela de login
  const handleLogout = () => {
    navigate('/login'); // Redireciona para a tela de login
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <h2>Menu Principal</h2>
        <p>Selecione uma opção abaixo:</p>
        <button onClick={() => navigate('/production')} className="dashboard-button">
          Registrar Atividades
        </button>
        <button onClick={() => navigate('/stock')} className="dashboard-button">
          Controle de Estoque
        </button>
        <button onClick={() => navigate('/view-stock')} className="dashboard-button">
          Estoque Completo
        </button>

        {/* Botão de sair */}
        <button onClick={handleLogout} className="dashboard-button logout-button">
          Sair
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
