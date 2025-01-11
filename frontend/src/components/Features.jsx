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
                <li onClick={() => navigate('/start')}>Com Iniciar</li>
                <li onClick={() => navigate('/features')}>Característiques</li>
                <li onClick={() => navigate('/about')}>Sobre Nosaltres</li>
            </ul>
        </nav>
        <section className="features-section">
            <h1>Característiques de l'Aplicació</h1>
            <div className="features-container">
                <div className="feature-item">
                    <h2>Seguiment en Temps Real</h2>
                    <p>Pots veure el rendiment dels teus estocs en temps real i rebre actualitzacions instantànies.</p>
                </div>
                <div className="feature-item">
                    <h2>Alertes Personalitzades</h2>
                    <p>Configura alertes perquè et notifiquem quan els teus estocs arribin a nivells crítics o s'actualitzin.</p>
                </div>
                <div className="feature-item">
                    <h2>Interfície Intuïtiva</h2>
                    <p>Una interfície fàcil d’utilitzar perquè puguis gestionar les teves accions sense complicacions.</p>
                </div>
                <div className="feature-item">
                    <h2>Gràfics i Anàlisis</h2>
                    <p>Accedeix a gràfics i eines d'anàlisi per obtenir una millor visibilitat del teu rendiment.</p>
                </div>
                <div className="feature-item">
                    <h2>Accés Multidispositiu</h2>
                    <p>Accedeix a la teva informació des de qualsevol dispositiu, en qualsevol moment.</p>
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
