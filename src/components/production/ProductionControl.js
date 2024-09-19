import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductionControl.css';

const ProductionControl = () => {
  const [activity, setActivity] = useState('');
  const [date, setDate] = useState(''); // Estado para a data
  const [activities, setActivities] = useState([]); // Estado para armazenar as atividades
  const navigate = useNavigate();

  const handleAddActivity = () => {
    if (activity && date) {
      // Adicionar nova atividade com a data à lista de atividades
      const newActivity = { id: Date.now(), type: activity, date: date };
      setActivities([...activities, newActivity]);
      setActivity(''); // Limpar o campo de seleção
      setDate(''); // Limpar o campo de data
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
            onChange={(e) => setDate(e.target.value)} // Capturar a data escolhida
          />
        </div>

        <button onClick={handleAddActivity}>Adicionar Atividade</button>

        {/* Exibir as atividades registradas */}
        <h3>Atividades Registradas</h3>
        <ul>
          {activities.length === 0 ? (
            <li>Nenhuma atividade registrada ainda</li>
          ) : (
            activities.map((item) => (
              <li key={item.id}>
                {item.type} - {item.date} {/* Exibe o tipo de atividade e a data */}
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
