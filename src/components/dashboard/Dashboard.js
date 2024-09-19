import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="dashboard-container">
        <h2>Dashboard</h2>
        <button onClick={() => navigate('/stock')}>Controle de Estoque</button>
        {/* Adicione mais botões conforme necessário */}
      </div>
    </div>
  );
};

export default Dashboard;
