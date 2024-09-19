import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StockControl.css';

const StockControl = () => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [stock, setStock] = useState([]); // Estado para armazenar o estoque
  const navigate = useNavigate();

  const handleAddStock = () => {
    if (itemName && quantity) {
      const existingItem = stock.find(item => item.name === itemName);

      if (existingItem) {
        // Se o item já existir, atualize a quantidade
        setStock(stock.map(item =>
          item.name === itemName
            ? { ...item, quantity: item.quantity + parseInt(quantity, 10) }
            : item
        ));
      } else {
        // Se o item não existir, adicione-o ao estoque
        const newItem = { id: Date.now(), name: itemName, quantity: parseInt(quantity, 10) };
        setStock([...stock, newItem]);
      }

      setItemName('');
      setQuantity('');
    } else {
      alert('Por favor, preencha o nome e a quantidade do item!');
    }
  };

  const handleIncreaseQuantity = (id) => {
    setStock(stock.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const handleDecreaseQuantity = (id) => {
    setStock(stock.map(item =>
      item.id === id && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
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
          />

          <label htmlFor="quantity">Quantidade:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button onClick={handleAddStock}>Adicionar ao Estoque</button>

        {/* Exibir a lista de itens do estoque */}
        <h3>Itens no Estoque</h3>
        <ul>
          {stock.length === 0 ? (
            <li>Nenhum item no estoque</li>
          ) : (
            stock.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} unidades
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              </li>
            ))
          )}
        </ul>

        <button onClick={() => navigate('/view-stock')} style={{ marginTop: '10px' }}>
          Ver Estoque Completo
        </button>
      </div>
    </div>
  );
};

export default StockControl;
