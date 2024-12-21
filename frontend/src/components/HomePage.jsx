import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/HomePage.css';


const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container" onClick={() => navigate('/')}></div>
            <ul className="navbar-links">
                    <li onClick={() => navigate('/start')}>Com Iniciar</li>
                    <li onClick={() => navigate('/features')}>Característiques</li>
                    <li onClick={() => navigate('/news')}>Notícies</li>
                    <li onClick={() => navigate('/about')}>Sobre Nosaltres</li>
            </ul>
        </nav>
        <div className="homepage-container">
            <h1>Bienvenido a StockTracker</h1>
            <p>StockTracker us ajudarà a controlar les vostres inversions i mantenir-vos informats amb els últims moviments del mercat financer</p>
            <div className="homepage-buttons">
                <button onClick={() => navigate('/login')}>Iniciar Sesión</button>
                <button onClick={() => navigate('/register')}>Registrarse</button>
            </div>
        </div>
        <section id="start" className="content-section">
            <h2>Com Iniciar</h2>
            <p>Descubre cómo empezar a usar StockTracker para gestionar tus inversiones.</p>
        </section>

        <section id="features" className="content-section">
            <h2>Característiques</h2>
            <p>Explora las características clave que hacen de StockTracker la mejor herramienta para el seguimiento del mercado.</p>
        </section>

        <section id="news" className="content-section">
            <h2>Notícies</h2>
            <p>Mantente al día con las últimas noticias del mundo financiero y económico.</p>
        </section>

        <section id="about" className="content-section">
            <h2>Sobre Nosaltres</h2>
            <p>Conoce más sobre nuestro equipo y nuestra misión de ayudarte a alcanzar el éxito financiero.</p>
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

export default HomePage;
