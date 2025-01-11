import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const navigate = useNavigate(); 

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error al iniciar sessió');
            }

            navigate('/home');

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-container">
            <h1>Iniciar Sessió</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Correu Electrònic"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contrasenya"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Iniciar Sessió</button>
            </form>
            <div>
                <p>No tens un compte? <span onClick={() => navigate('/register')}>Registra't</span></p>
            </div>
            {error && <p className="error-message">{error}</p>} 
        </div>
    );
};

export default Login;
