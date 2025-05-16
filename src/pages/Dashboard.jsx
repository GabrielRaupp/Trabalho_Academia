import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

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
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">GymCalc</h2>
        <nav>
        <Link to="/" className="sidebar-btn active"><span>🏠</span> Home</Link>
        <Link to="/calculadora" className="sidebar-btn"><span>🧮</span> Calculadora</Link>
        <Link to="/alimentos" className="sidebar-btn"><span>🥗</span> Nutrição</Link>
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
            <button><span>🏠</span> TBM</button>
            <button><span>🏠</span> GET</button>
            <button><span>🏠</span> Caloria</button>
            <button><span>🏠</span> Caloria</button>
            <button><span>🏠</span> Caloria</button>
          </div>
        </section>

        <footer className="dashboard-footer">
      
        </footer>
      </main>
    </div>
  );
}

export default Dashboard;
