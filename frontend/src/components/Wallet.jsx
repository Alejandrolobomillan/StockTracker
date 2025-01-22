import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Wallet.css';

const Wallet = () => {
    const navigate = useNavigate();
    const [userStocks, setUserStocks] = useState([]); 
    const [totalBalance, setTotalBalance] = useState(0); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    const fetchUserProfile = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/users/profile', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}` 
                }
            });

            if (!response.ok) {
                throw new Error('Error al obtener el perfil del usuario');
            }

            const data = await response.json();
            setTotalBalance(data.balance || 0); 
            setUserStocks(data.stocks || []);
        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchStockPrice = async (stockId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/stocks/${stockId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (!response.ok) {
                throw new Error('Error al obtener el precio de la acción');
            }

            const data = await response.json();
            return data.currentPrice; 
        } catch (error) {
            console.error('Error al obtener el precio de la acción:', error);
            return null; 
        }
    };

    useEffect(() => {
        const updateData = async () => {
            const updatedStocks = await Promise.all(userStocks.map(async (stock) => {
                const currentPrice = await fetchStockPrice(stock.stockId); 
                return { ...stock, currentPrice }; 
            }));

            setUserStocks(updatedStocks);

            const profileResponse = await fetch('http://localhost:5000/api/users/profile', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (profileResponse.ok) {
                const profileData = await profileResponse.json();
                setTotalBalance(profileData.balance || 0); 
            } else {
                console.error('Error al obtener el balance del usuario');
            }
        };

        const interval = setInterval(updateData, 10000); 

        updateData();

        return () => clearInterval(interval);
    }, [userStocks]); 

    useEffect(() => {
        fetchUserProfile(); 
    }, []);

    return (
        <>
            <nav className="navbardins">
                <div className="navbar-container" onClick={() => navigate('/')}>
                    <img src="/logodentro.jpg" alt="Logo" className="navbar-logo" />
                </div>
                <ul className="navbar-links">
                    <li onClick={() => navigate('/home')}>Home</li>
                    <li onClick={() => navigate('/wallet')}>Cartera</li>
                    <li onClick={() => navigate('/profile')}>Perfil</li>
                </ul>
            </nav>
            <section>
                <div className="wallet-container">
                    <h2>Mi Cartera</h2>
                    {loading ? (
                        <p>Cargando...</p>
                    ) : error ? (
                        <p>{error}</p> 
                    ) : (
                        <>
                            <div className="wallet-balance">
                                <h3>Saldo Total: ${totalBalance.toFixed(2)}</h3>
                            </div>
                            <table className="wallet-table">
                                <thead>
                                    <tr>
                                        <th>Símbolo</th>
                                        <th>Empresa</th>
                                        <th>Cantidad</th>
                                        <th>Precio Actual</th>
                                        <th>Valor Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userStocks.map((stock) => {
                                        
                                        const totalValue = stock.currentPrice ? stock.quantity * stock.currentPrice : 0;

                                        return (
                                            <tr key={stock.stockId}>
                                                <td>{stock.tickerSymbol}</td>
                                                <td>{stock.companyName}</td>
                                                <td>{stock.quantity}</td>
                                                <td>{stock.currentPrice ? `$${stock.currentPrice.toFixed(2)}` : 'Cargando...'}</td>
                                               
                                                <td>{totalValue ? `$${totalValue.toFixed(2)}` : 'Cargando...'}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            {userStocks.length === 0 && <p>No tienes acciones en tu cartera.</p>}
                        </>
                    )}
                </div>
            </section>
        </>
    );
};

export default Wallet;
