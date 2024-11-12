import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStock } from '../contexts/StockContext';

const ViewStock = () => {
  const { stock } = useStock();
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/dashboard'); // Navega de volta para o Dashboard
  };

  return (
    <div className="page-container">
      <div className="stock-container">
        <h2>Estoque Atual</h2>
        <ul>
          {stock.length === 0 ? (
            <li>Estoque vazio</li>
          ) : (
            stock.map((item) => (
              <li key={item.id}>
                {item.name}: {item.quantity} unidades
              </li>
            ))
          )}
        </ul>
        <button onClick={handleBackToDashboard} style={{ marginTop: '10px' }}>
          Voltar ao Dashboard
        </button>
      </div>
    </div>
  );
};

export default ViewStock;
