import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/HomePage.css';

const HomePage = () => {
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
        <section className="background-section">
            <h1 className="background-title">StockTracker</h1>
        </section>
        <section className="content1">
            <img src="/image1.jpg" alt="Stock Market" className="image1" />
            <div className="text-container">
                <h2>Gestión Eficiente</h2> 
                <p>
                    StockTracker te ayudará a gestionar y optimizar tus inversiones con eficacia, proporcionándote información actualizada sobre los últimos movimientos del mercado financiero.
                    Con nuestras herramientas intuitivas, podrás analizar las tendencias del mercado, tomar decisiones informadas y seguir el rendimiento de tu portafolio en tiempo real. Tanto si eres un inversor experimentado como si estás comenzando, StockTracker te ofrece los recursos necesarios para alcanzar tus objetivos financieros con confianza y seguridad.
                </p>  
                <div className="homepage-buttons">
                    <button onClick={() => navigate('/login')}>Iniciar Sesión</button>
                    <button onClick={() => navigate('/register')}>Registrarse</button>
                </div>   
            </div>
        </section>
        <section className="content2">
            <div className='titol_container'>
                <h2>Nuestros servicios</h2>
                <img src="/image2.jpg" alt="Stock Market" className="image2" />
            </div>
            <div className="text-container2">
                <ul>
                    <li>
                        <strong>Monitoreo en tiempo real</strong>
                        <p>Obtén información actualizada sobre el rendimiento de tus inversiones y los movimientos del mercado.</p>
                    </li>
                    <li>
                        <strong>Informes detallados</strong>
                        <p>Accede a análisis e informes que te ayudarán a comprender las tendencias del mercado financiero.</p>
                    </li>
                    <li>
                        <strong>Herramientas de gestión</strong>
                        <p>Utiliza herramientas intuitivas para gestionar tu portafolio y optimizar tus estrategias de inversión.</p>
                    </li>
                </ul>
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

export default HomePage;
