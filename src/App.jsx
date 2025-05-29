import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Alimentos from './pages/Alimentos';
import Calculadora from './pages/Calculadora';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
