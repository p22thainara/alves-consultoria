import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductionControl.css';

const ProductionControl = () => {
  const [activity, setActivity] = useState('');
  const [date, setDate] = useState('');
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  // Carrega as atividades do Local Storage quando o componente monta
  useEffect(() => {
    const storedActivities = localStorage.getItem('activities');
    if (storedActivities) {
      setActivities(JSON.parse(storedActivities));
    }
  }, []);

  // Função para adicionar nova atividade e salvar no Local Storage
  const handleAddActivity = () => {
    if (activity && date) {
      const newActivity = { id: Date.now(), type: activity, date: date };
      const updatedActivities = [...activities, newActivity];
      setActivities(updatedActivities);
      localStorage.setItem('activities', JSON.stringify(updatedActivities)); // Salva no Local Storage
      setActivity('');
      setDate('');
    } else {
      alert('Por favor, selecione uma atividade e uma data!');
    }
  };

  return (
    <div className="page-container">
      <div className="production-container">
        <h2>Nova Atividade de Produção</h2>
        <div className="activity-container">
          <label htmlFor="activity">Atividade:</label>
          <select id="activity" value={activity} onChange={(e) => setActivity(e.target.value)}>
            <option value="">Selecione uma atividade</option>
            <option value="Plantio">Plantio</option>
            <option value="Irrigação">Irrigação</option>
            <option value="Colheita">Colheita</option>
          </select>
        </div>

        <div className="date-container">
          <label htmlFor="date">Data da Atividade:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button onClick={handleAddActivity}>Adicionar Atividade</button>

        <h3>Atividades Registradas</h3>
        <ul className="activities-list">
          {activities.length === 0 ? (
            <li>Nenhuma atividade registrada ainda</li>
          ) : (
            activities.map((item) => (
              <li key={item.id}>
                {item.type} - {item.date}
              </li>
            ))
          )}
        </ul>

        <button onClick={() => navigate('/stock')}>Ir para Controle de Estoque</button>
      </div>
    </div>
  );
};

export default ProductionControl;
