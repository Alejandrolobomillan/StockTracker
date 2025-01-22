import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/Profile.css';

const Profile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null); 
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
                throw new Error('Error al obtener los datos del usuario');
            }

            const data = await response.json();
            setUserData(data); 
        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');  
        navigate('/');  
    };    

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
            <div className="profile-container">
                <h2>Perfil del Usuario</h2>
                {loading ? (
                    <p>Cargando...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <>
                        <div className="profile-details">
                            <p><strong>Nombre:</strong> {userData?.username}</p>
                            <p><strong>Email:</strong> {userData?.email}</p>
                        </div>
                        <button className="logout-button" onClick={handleLogout}>
                            Cerrar Sesión
                        </button>
                    </>
                )}
            </div>
        </section>
        </>
    );
};

export default Profile;
