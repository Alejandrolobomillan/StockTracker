import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
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

        <section className="about-section">
            <h1>Sobre Nosotros</h1>
            <div className="about-container">
                <div className="about-item">
                    <h2>¿Quiénes Somos?</h2>
                    <p>Somos una empresa dedicada a proporcionar herramientas eficientes para gestionar y monitorear tus acciones de manera fácil e intuitiva.</p>
                </div>
                <div className="about-item">
                    <h2>Nuestra Misión</h2>
                    <p>Nuestra misión es ayudar a las empresas a tomar decisiones más informadas sobre sus acciones e inversiones mediante nuestro sistema de seguimiento en tiempo real.</p>
                </div>
                <div className="about-item">
                    <h2>Visión</h2>
                    <p>Queremos ser la plataforma número 1 para el seguimiento de la evolución de las acciones, aportando transparencia y eficacia al mercado financiero global.</p>
                </div>
                <div className="about-item">
                    <h2>Nuestros Valores</h2>
                    <p>Innovación, transparencia y compromiso con la calidad son los pilares sobre los cuales construimos nuestros servicios.</p>
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

export default About;
