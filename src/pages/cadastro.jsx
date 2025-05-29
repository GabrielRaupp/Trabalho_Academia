import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cadastro.css';

function Cadastro() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    idade: '',
    peso: '',
    altura: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, email, senha, idade, peso, altura } = form;
    if (!nome || !email || !senha || !idade || !peso || !altura) {
      alert('Preencha todos os campos.');
      return;
    }
    navigate('/dashboard');
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-form-wrapper">
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <h2>Cadastro</h2>

          <label>Nome:</label>
          <input type="text" name="nome" value={form.nome} onChange={handleChange} placeholder="João da Silva" />

          <label>Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@email.com" />

          <label>Senha:</label>
          <input type="password" name="senha" value={form.senha} onChange={handleChange} placeholder="••••••••" />

          <div className="inline-fields">
            <div>
              <label>Idade:</label>
              <select name="idade" value={form.idade} onChange={handleChange}>
                <option value="">Selecione</option>
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Peso:</label>
              <select name="peso" value={form.peso} onChange={handleChange}>
                <option value="">Selecione</option>
                {Array.from({ length: 200 }, (_, i) => (
                  <option key={i} value={i + 1}>{i + 1} kg</option>
                ))}
              </select>
            </div>
            <div>
              <label>Altura:</label>
              <select name="altura" value={form.altura} onChange={handleChange}>
                <option value="">Selecione</option>
                {Array.from({ length: 100 }, (_, i) => {
                  const val = (1 + i * 0.01).toFixed(2);
                  return <option key={val} value={val}>{val} m</option>;
                })}
              </select>
            </div>
          </div>

          <button type="submit">Faça seu cadastro</button>
        </form>
      </div>

      <div className="cadastro-banner">
        <h1>Faça Cadastro</h1>
        <p>E aproveite o mundo da matemática</p>
      </div>
    </div>
  );
}

export default Cadastro;
