import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">GymCalc</div>
        <Link to="/login" className="btn-navbar">Faça o Login</Link>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Mude sua vida hoje mesmo</h1>
          <Link to="/cadastro" className="btn-hero">Faça seu cadastro</Link>
        </div>
      </section>

      <a href="#final" className="scroll-down">
        <span className="arrow">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4V16M10 16L5 11M10 16L15 11"
                  stroke="black" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </a>

      <section className="benefits">
        <h2>Com nosso app, você poderá:</h2>
        <ul>
          <li>Realizar cálculos precisos para sua rotina de treino e dieta</li>
          <li>Acompanhar sua evolução física com dados personalizados</li>
          <li>Tomar decisões melhores baseadas na sua composição corporal</li>
        </ul>
      </section>

      <div id="final" style={{ height: '1px' }}></div>
    </div>
  );
}

export default Home;
