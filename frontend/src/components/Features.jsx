import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Features.css';

const Features = () => {
    const navigate = useNavigate();

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container" onClick={() => navigate('/')}>
                <img src="/logodentro.jpg" alt="Logo" className="navbar-logo" />
            </div>
            <ul className="navbar-links">
                <li onClick={() => navigate('/start')}>Cómo Iniciar</li>
                <li onClick={() => navigate('/features')}>Características</li>
                <li onClick={() => navigate('/about')}>Sobre Nosotros</li>
            </ul>
        </nav>
        <section className="features-section">
            <h1>Características de la Aplicación</h1>
            <div className="features-container">
                <div className="feature-item">
                    <h2>Seguimiento en Tiempo Real</h2>
                    <p>Puedes ver el rendimiento de tus acciones en tiempo real y recibir actualizaciones instantáneas.</p>
                </div>
                <div className="feature-item">
                    <h2>Alertas Personalizadas</h2>
                    <p>Configura alertas para que te notifiquemos cuando tus acciones lleguen a niveles críticos o se actualicen.</p>
                </div>
                <div className="feature-item">
                    <h2>Interfaz Intuitiva</h2>
                    <p>Una interfaz fácil de usar para que puedas gestionar tus acciones sin complicaciones.</p>
                </div>
                <div className="feature-item">
                    <h2>Gráficos y Análisis</h2>
                    <p>Accede a gráficos y herramientas de análisis para obtener una mejor visibilidad de tu rendimiento.</p>
                </div>
                <div className="feature-item">
                    <h2>Acceso Multidispositivo</h2>
                    <p>Accede a tu información desde cualquier dispositivo, en cualquier momento.</p>
                </div>
            </div>
        </section>

        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 StockTracker. Todos los derechos reservados.</p>
                <div className="footer-links">
                    <p>Política de privacidad<br/>Términos de servicio</p> 
                </div>
            </div>
        </footer>
        </>
    );
};

export default Features;
