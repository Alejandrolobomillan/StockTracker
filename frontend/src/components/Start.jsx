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
                    <li onClick={() => navigate('/start')}>Com Iniciar</li>
                    <li onClick={() => navigate('/features')}>Característiques</li>

                    <li onClick={() => navigate('/about')}>Sobre Nosaltres</li>
            </ul>
        </nav>
        <section className="start-section">
        <h1>Comença a Invertir en Accions</h1>
            <div className="start-content">
                <p>
                    Invertir en accions pot semblar intimidatori al principi, però amb els passos adequats i una bona planificació, és més senzill del que imagines. Aquí tens una guia ràpida per començar:
                </p>
                <ul>
                    <li>
                        <strong>1. Educa't sobre el mercat:</strong> Abans d'invertir, és essencial entendre com funciona el mercat de valors. Investiga sobre termes com "accions", "dividends" i "riscos d'inversió". 
                    </li>
                    <li>
                        <strong>2. Estableix els teus objectius:</strong> Defineix si vols guanys a curt termini o estalviar per al futur. Els teus objectius determinaran les teves estratègies d'inversió.
                    </li>
                    <li>
                        <strong>3. Obre un compte de corredoria:</strong> Registra't en una plataforma que ofereixi eines per comprar i vendre accions fàcilment. 
                        Pots començar ara mateix a través de <span onClick={() => navigate('/register')}>Registrar-se</span>.
                    </li>
                    <li>
                        <strong>4. Comença petit:</strong> No cal començar amb grans quantitats. Inverteix només allò que estiguis disposat a perdre mentre guanyes experiència.
                    </li>
                    <li>
                        <strong>5. Diversifica la teva cartera:</strong> No posis tots els teus diners en una sola empresa. Inverteix en diverses accions per reduir riscos.
                    </li>
                    <li>
                        <strong>6. Monitoritza i ajusta:</strong> Fes un seguiment regular del rendiment de les teves inversions i ajusta la teva estratègia segons calgui.
                    </li>
                </ul>
                <p>
                    A StockTracker, oferim eines senzilles i intuïtives per ajudar-te en cada pas del teu viatge d'inversió. <span onClick={() => navigate('/register')} >Comença avui mateix</span> i pren el control del teu futur financer!
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
