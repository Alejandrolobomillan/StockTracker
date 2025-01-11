import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Start from './components/Start';
import Features from './components/Features';
import About from './components/About';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/start" element={<Start />} />
                <Route path="/features" element={<Features />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
