import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // certifique-se de criar esse arquivo

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    senha: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, senha } = form;
    if (!email || !senha) {
      alert('Preencha todos os campos.');
      return;
    }
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="form-section">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="seu@email.com"
            value={form.email}
            onChange={handleChange}
          />

          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            placeholder="••••••••"
            value={form.senha}
            onChange={handleChange}
          />

          <button type="submit" className="btn-submit">Entrar</button>

          <div className="btn-back" onClick={() => navigate('/')}>
            Voltar para o início
          </div>
        </form>
      </div>

      <div className="banner-section">
        <div className="banner-overlay">
          <h2>Bem-vindo de volta!</h2>
          <p>Acesse sua conta e continue aprendendo.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
