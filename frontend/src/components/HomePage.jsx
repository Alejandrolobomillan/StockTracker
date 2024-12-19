import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="homepage-container">
            <h1>Bienvenido a StockTracker</h1>
            <div className="homepage-buttons">
                <button onClick={() => navigate('/login')}>Iniciar Sesión</button>
                <button onClick={() => navigate('/register')}>Registrarse</button>
            </div>
        </div>
    );
};

export default HomePage;
