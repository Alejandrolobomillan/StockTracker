import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const StockDetail = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [stock, setStock] = useState(null);
    const [quantity, setQuantity] = useState(1); 
    const [action, setAction] = useState('buy'); 
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); 

    const fetchStockDetails = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/stocks/${id}`);
            if (!response.ok) {
                throw new Error('Error al obtener los detalles de la acción');
            }
            const data = await response.json();
            setStock(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleBuyStock = async () => {
        if (isNaN(quantity) || quantity <= 0) {
            setMessage('Cantidad no válida');
            return;
        }
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/api/users/buyStock', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}` 
                },
                body: JSON.stringify({ stockId: stock._id, quantity })
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Compra realizada con éxito');
            } else {
                setMessage(data.message || 'Error al realizar la compra');
            }
        } catch (error) {
            setMessage('Error al realizar la compra');
        } finally {
            setLoading(false);
        }
    };

   
    const handleSellStock = async () => {
        if (isNaN(quantity) || quantity <= 0) {
            setMessage('Cantidad no válida');
            return;
        }
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/api/users/sellStock', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}` 
                },
                body: JSON.stringify({ stockId: stock._id, quantity })
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Venta realizada con éxito');
            } else {
                setMessage(data.message || 'Error al realizar la venta');
            }
        } catch (error) {
            setMessage('Error al realizar la venta');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStockDetails(); 
        const interval = setInterval(fetchStockDetails, 10000); 
        return () => clearInterval(interval); 
    }, [id]); 

    if (!stock) return <div>Cargando...</div>;

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
            
            <div className="stock-detail-container">
                <h2>Detalles de la Acción</h2>
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
                        <tr>
                            <td>{stock.tickerSymbol}</td>
                            <td>{stock.companyName}</td>
                            <td>{stock.sector}</td>
                            <td>${stock.currentPrice.toFixed(2)}</td>
                            <td>{stock.volume.toLocaleString()}</td>
                            <td>${(stock.marketCap / 1e9).toFixed(2)}B</td>
                            <td>{stock.availableShares.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="stock-action-container">
                    <h3>{action === 'buy' ? 'Comprar' : 'Vender'} Acciones</h3>
                    <div>
                        <label htmlFor="quantity">Cantidad:</label>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            min="1"
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                    </div>

                    <button onClick={action === 'buy' ? handleBuyStock : handleSellStock} disabled={loading}>
                        {loading ? 'Cargando...' : (action === 'buy' ? 'Comprar' : 'Vender')}
                    </button>
                    <button onClick={() => setAction(action === 'buy' ? 'sell' : 'buy')}>
                        Cambiar a {action === 'buy' ? 'Vender' : 'Comprar'}
                    </button>

                    {message && <div className="message">{message}</div>}
                </div>
            </div>
        </>
    );
};

export default StockDetail;
