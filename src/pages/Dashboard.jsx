import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Link, useNavigate } from 'react-router-dom';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

import '../styles/Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
  labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
  datasets: [
    {
      label: 'Calorias',
      data: [2200, 1900, 2500, 2100, 2300],
      backgroundColor: '#00ff88',
      borderRadius: 6,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: 'white',
        font: {
          weight: 'bold',
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'white',
      },
    },
    y: {
      ticks: {
        color: 'white',
      },
    },
  },
};

function Dashboard() {
  const navigate = useNavigate();
  const PAL_DEFAULT = 1.6;

  const [tmb, setTmb] = useState(null);
  const [get, setGet] = useState(null);

  useEffect(() => {
    const tmbStorage = localStorage.getItem('tmb');
    const getStorage = localStorage.getItem('get');
    if (tmbStorage) setTmb(tmbStorage);
    if (getStorage) setGet(getStorage);
  }, []);

  const handleEditTMB = () => {
    const novoTmb = prompt('Digite o novo TMB (kcal):', tmb || '');
    if (novoTmb !== null && !isNaN(novoTmb) && novoTmb > 0) {
      localStorage.setItem('tmb', novoTmb);
      setTmb(novoTmb);
      const novoGet = (parseFloat(novoTmb) * PAL_DEFAULT).toFixed(1);
      localStorage.setItem('get', novoGet);
      setGet(novoGet);
    }
  };

  const handleEditGET = () => {
    const novoGet = prompt('Digite o novo GET (kcal):', get || '');
    if (novoGet !== null && !isNaN(novoGet) && novoGet > 0) {
      localStorage.setItem('get', novoGet);
      setGet(novoGet);
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">GymCalc</h2>
        <nav>
          <Link to="/" className="sidebar-btn active"><span>🏠</span> Home</Link>

          <button className="sidebar-btn" onClick={() => navigate('/calculadora?tipo=gastoCalorico')}>
            🔥 Gasto Calórico
          </button>

          <button className="sidebar-btn" onClick={() => navigate('/calculadora?tipo=nutricao')}>
            🥦 Nutrição
          </button>

          <button className="sidebar-btn" onClick={() => navigate('/calculadora?tipo=hidratacao')}>
            💧 Hidratação
          </button>

          <Link to="/alimentos" className="sidebar-btn"><span>🥗</span> Alimentos</Link>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <span>Olá, João da Silva</span>
          <div className="profile-icon">👤</div>
        </header>

        <section className="dashboard-content">
          <div className="main-chart">
            <h3>Visão Geral</h3>
            <Bar data={data} options={options} />
          </div>

          <div className="action-panel">
            <h3>Ações rápidas</h3>

            <button onClick={handleEditTMB}><span>🔥</span> TMB: {tmb ? `${tmb} kcal` : '---'}</button>
            <button onClick={handleEditGET}><span>⚡</span> GET: {get ? `${get} kcal` : '---'}</button>
            <button><span>📊</span> Calorias</button>
            <button><span>🥗</span> Nutrição</button>
          </div>
        </section>

        <footer className="dashboard-footer"></footer>
      </main>
    </div>
  );
}

export default Dashboard;
