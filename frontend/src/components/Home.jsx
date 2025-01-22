import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    const [stocks, setStocks] = useState([]); 
    const navigate = useNavigate();

    const fetchStocks = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/stocks');
            const data = await response.json();
            setStocks(data);
        } catch (error) {
            console.error('Error al obtener las acciones:', error);
        }
    };

    useEffect(() => {
        fetchStocks(); // Llamada inicial
        const interval = setInterval(fetchStocks, 10000); 
        return () => clearInterval(interval); 
    }, []);

    const handleStockClick = (id) => {
        navigate(`/stocks/${id}`); 
    };

    return (
        <>
            <nav className="navbardins">
                <div className="navbardins-container">
                    <img src="/logodentro.jpg" alt="Logo" className="navbardins-logo" />
                </div>
                <ul className="navbar-links">
                    <li onClick={() => navigate('/home')}>Home</li>
                    <li onClick={() => navigate('/wallet')}>Cartera</li>
                    <li onClick={() => navigate('/profile')}>Perfil</li>
                </ul>
            </nav>
            <section>
                <div className="stocks-container">
                    <h2>Acciones Disponibles</h2>
                    <table className="stocks-table">
                        <thead>
                            <tr>
                                <th>Símbolo</th>
                                <th>Empresa</th>
                                <th>Sector</th>
                                <th>Precio Actual</th>
                                <th>Volumen</th>
                                <th>Capitalización</th>
                                <th>Acciones Disponibles</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {stocks.map((stock) => (
                                <tr key={stock._id} onClick={() => handleStockClick(stock._id)}>
                                    <td>{stock.tickerSymbol}</td>
                                    <td>{stock.companyName}</td>
                                    <td>{stock.sector}</td>
                                    <td>${stock.currentPrice.toFixed(2)}</td>
                                    <td>{stock.volume.toLocaleString()}</td>
                                    <td>${(stock.marketCap / 1e9).toFixed(2)}B</td>
                                    <td>{stock.availableShares.toLocaleString()}</td> 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default Home;
