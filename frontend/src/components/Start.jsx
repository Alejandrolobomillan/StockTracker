import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Start.css';

const Start = () => {
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
        <section className="start-section">
        <h1>Comienza a Invertir en Acciones</h1>
            <div className="start-content">
                <p>
                    Invertir en acciones puede parecer intimidante al principio, pero con los pasos adecuados y una buena planificación, es más sencillo de lo que imaginas. Aquí tienes una guía rápida para comenzar:
                </p>
                <ul>
                    <li>
                        <strong>1. Edúcate sobre el mercado:</strong> Antes de invertir, es esencial entender cómo funciona el mercado de valores. Investiga sobre términos como "acciones", "dividendos" y "riesgos de inversión".
                    </li>
                    <li>
                        <strong>2. Establece tus objetivos:</strong> Define si quieres ganancias a corto plazo o ahorrar para el futuro. Tus objetivos determinarán tus estrategias de inversión.
                    </li>
                    <li>
                        <strong>3. Abre una cuenta de corretaje:</strong> Regístrate en una plataforma que ofrezca herramientas para comprar y vender acciones fácilmente. 
                        Puedes empezar ahora mismo a través de <span onClick={() => navigate('/register')}>Registrarse</span>.
                    </li>
                    <li>
                        <strong>4. Comienza pequeño:</strong> No es necesario comenzar con grandes cantidades. Invierte solo lo que estés dispuesto a perder mientras adquieres experiencia.
                    </li>
                    <li>
                        <strong>5. Diversifica tu cartera:</strong> No pongas todo tu dinero en una sola empresa. Invierte en varias acciones para reducir riesgos.
                    </li>
                    <li>
                        <strong>6. Monitorea y ajusta:</strong> Haz un seguimiento regular del rendimiento de tus inversiones y ajusta tu estrategia según sea necesario.
                    </li>
                </ul>
                <p>
                    En StockTracker, ofrecemos herramientas sencillas e intuitivas para ayudarte en cada paso de tu viaje de inversión. <span onClick={() => navigate('/register')}>¡Comienza hoy mismo</span> y toma el control de tu futuro financiero!
                </p>
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

export default Start;
