import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web'; // Importa animações do react-spring
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  // Animação de fade-in para o texto
  const fadeInProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Duração de 1 segundo
  });

  // Animação de transição para o botão após 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleEnterSystem = () => {
    navigate('/login'); // Agora redireciona para a tela de login
  };

  return (
    <div className="home-container">
      {/* Animação de texto com react-spring */}
      <animated.h1 style={fadeInProps}>Bem-vindo ao Sistema de Controle</animated.h1>
      <animated.h2 style={fadeInProps}>Iniciando...</animated.h2>

      {/* Exibe o botão após a animação */}
      {showButton && (
        <button className="enter-button" onClick={handleEnterSystem}>
          Entrar no Sistema
        </button>
      )}
    </div>
  );
};

export default Home;
