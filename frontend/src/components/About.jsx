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
                <li onClick={() => navigate('/start')}>Com Iniciar</li>
                <li onClick={() => navigate('/features')}>Característiques</li>
                <li onClick={() => navigate('/about')}>Sobre Nosaltres</li>
            </ul>
        </nav>

        <section className="about-section">
            <h1>Sobre Nosaltres</h1>
            <div className="about-container">
                <div className="about-item">
                    <h2>Qui Som?</h2>
                    <p>Som una empresa dedicada a proporcionar eines eficients per gestionar i monitoritzar els teus estocs de manera fàcil i intuïtiva.</p>
                </div>
                <div className="about-item">
                    <h2>La nostra Missió</h2>
                    <p>La nostra missió és ajudar a les empreses a prendre decisions més informades sobre els seus estocs i inversions mitjançant el nostre sistema de seguiment en temps real.</p>
                </div>
                <div className="about-item">
                    <h2>Visió</h2>
                    <p>Volem ser la plataforma número 1 per al seguiment de l'evolució dels estocs, aportant transparència i eficàcia al mercat financer global.</p>
                </div>
                <div className="about-item">
                    <h2>Els nostres Valors</h2>
                    <p>Innovació, transparència, i compromís amb la qualitat són els pilars sobre els quals construïm els nostres serveis.</p>
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
