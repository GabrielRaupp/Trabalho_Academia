import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Cadastro.css';

function Cadastro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    idade: '',
    peso: '',
    altura: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const empty = Object.values(form).some(val => !val);
    if (empty) return alert('Por favor, preencha todos os campos.');

    console.log('Dados cadastrados:', form);
    navigate('/dashboard');
  };

  return (
    <div className="cadastro-container">
      <div className="form-section">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Cadastro</h2>

          <div className="input-block">
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="João da Silva"
            />
          </div>

          <div className="input-block">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@email.com"
            />
          </div>

          <div className="input-block">
            <label>Senha:</label>
            <input
              type="password"
              name="senha"
              value={form.senha}
              onChange={handleChange}
              placeholder="••••••••"
            />
          </div>

          <div className="input-group">
            <div>
              <label>Idade:</label>
              <input
                type="number"
                name="idade"
                value={form.idade}
                onChange={handleChange}
                placeholder="Ex: 25"
                min="10"
                max="120"
              />
            </div>
            <div>
              <label>Peso (kg):</label>
              <input
                type="number"
                name="peso"
                value={form.peso}
                onChange={handleChange}
                placeholder="Ex: 70.5"
                step="0.1"
                min="30"
                max="250"
              />
            </div>
            <div>
              <label>Altura (m):</label>
              <input
                type="number"
                name="altura"
                value={form.altura}
                onChange={handleChange}
                placeholder="Ex: 1.75"
                step="0.01"
                min="1.30"
                max="2.30"
              />
            </div>
          </div>

          <button type="submit" className="btn-submit">Fazer Cadastro</button>
          <Link to="/" className="btn-back">Voltar para o início</Link>
        </form>
      </div>

      <div className="banner-section">
        <div className="banner-overlay">
          <h2>Faça Cadastro</h2>
          <p>E aproveite o mundo da matemática</p>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
