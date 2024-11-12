import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStock } from '../contexts/StockContext';
import './StockControl.css';

const StockControl = () => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const { stock, addStock } = useStock();
  const navigate = useNavigate();

  const handleAddStock = () => {
    if (!itemName.trim() || quantity <= 0) {
      alert('Por favor, insira um nome válido e uma quantidade maior que zero!');
      return;
    }
    const newItem = {
      id: Date.now(),
      name: itemName.trim(),
      quantity: parseInt(quantity, 10),
    };
    addStock(newItem);
    setItemName('');
    setQuantity('');
  };

  const updateQuantity = (id, change) => {
    const item = stock.find((item) => item.id === id);
    if (item) {
      const newQuantity = Math.max(item.quantity + change, 0);
      addStock({ ...item, quantity: newQuantity });
    }
  };

  return (
    <div className="page-container">
      <div className="stock-container">
        <h2>Controle de Estoque</h2>
        <div className="stock-input-container">
          <label htmlFor="itemName">Nome do Item:</label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Digite o nome do item"
          />

          <label htmlFor="quantity">Quantidade:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Digite a quantidade"
          />
        </div>
        <button onClick={handleAddStock}>Adicionar ao Estoque</button>

        <h3>Itens no Estoque</h3>
        <ul className="stock-list">
          {stock.length === 0 ? (
            <li>Nenhum item no estoque</li>
          ) : (
            stock.map((item) => (
              <li key={item.id}>
                {item.name}: {item.quantity} unidades
                <div>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    disabled={item.quantity === 0}
                  >
                    -
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>

        <button
          onClick={() => navigate('/view-stock')}
          style={{ marginTop: '10px' }}
        >
          Ver Estoque Completo
        </button>
      </div>
    </div>
  );
};

export default StockControl;
