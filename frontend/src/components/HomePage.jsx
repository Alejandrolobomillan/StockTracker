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
                    <li onClick={() => navigate('/start')}>Com Iniciar</li>
                    <li onClick={() => navigate('/features')}>Característiques</li>
                    <li onClick={() => navigate('/about')}>Sobre Nosaltres</li>
            </ul>
        </nav>
        <section className="background-section">
            <h1 className="background-title">StockTracker</h1>
        </section>
        <section className="content1">
            <img src="/image1.jpg" alt="Stock Market" className="image1" />
            <div className="text-container">
                <h2>Gestió Eficient</h2> 
                <p>
                    StockTracker us ajudarà a gestionar i optimitzar les vostres inversions amb eficàcia, proporcionant-vos informació actualitzada sobre els últims moviments del mercat financer.
                    Amb les nostres eines intuïtives, podreu analitzar les tendències del mercat, prendre decisions informades i seguir el rendiment del vostre portafoli en temps real. Tant si sou un inversor experimentat com si esteu començant, StockTracker us ofereix els recursos necessaris per assolir els vostres objectius financers amb confiança i seguretat.
                </p>  
                <div className="homepage-buttons">
                    <button onClick={() => navigate('/login')}>Iniciar Sessió</button>
                    <button onClick={() => navigate('/register')}>Registrar-se</button>
                </div>   
            </div>
        </section>
        <section className="content2">
            <div className='titol_container'>
                <h2>Els nostres serveis</h2>
                <img src="/image2.jpg" alt="Stock Market" className="image2" />
            </div>
            <div className="text-container2">
                <ul>
                    <li>
                        <strong>Monitorització en temps real</strong>
                        <p>Obteniu informació actualitzada sobre el rendiment de les vostres inversions i els moviments del mercat.</p>
                    </li>
                    <li>
                        <strong>Informes detallats</strong>
                        <p>Accediu a anàlisis i informes que us ajudaran a comprendre les tendències del mercat financer.</p>
                    </li>
                    <li>
                        <strong>Eines de gestió</strong>
                        <p>Utilitzeu eines intuïtives per gestionar el vostre portafoli i optimitzar les vostres estratègies d'inversió.</p>
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