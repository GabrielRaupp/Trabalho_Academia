import React, { useState } from 'react';
import '../styles/Calculadora.css';

function Calculadora() {
  const [altura, setAltura] = useState('');
  const [pesoIdeal, setPesoIdeal] = useState(null);
  const [sexo, setSexo] = useState('masculino');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [tmb, setTmb] = useState(null);

  const calcularPesoIdeal = () => {
    const alturaCm = parseFloat(altura.replace(',', '.')) * 100;
    const resultado =
      sexo === 'masculino'
        ? 50 + 0.91 * (alturaCm - 152.4)
        : 45.5 + 0.91 * (alturaCm - 152.4);
    setPesoIdeal(resultado.toFixed(1));
  };

  const calcularTMB = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura.replace(',', '.')) * 100;
    const i = parseInt(idade);

    const resultado =
      sexo === 'masculino'
        ? 66.5 + 13.75 * p + 5.003 * a - 6.75 * i
        : 655 + 9.563 * p + 1.850 * a - 4.676 * i;

    setTmb(resultado.toFixed(1));
  };

    return (
        <div className="calculadora-container">
          <div className="calculadora-content">
            <div className="form-group">
              <h2>Calculadora</h2>
      
              <label>Sexo:</label>
              <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
              </select>
      
              <label>Altura (m):</label>
              <input
                type="text"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
              />
      
              <button onClick={calcularPesoIdeal}>Calcular Peso Ideal</button>
              {pesoIdeal && (
                <p>
                  Peso Ideal: <strong>{pesoIdeal} kg</strong>
                </p>
              )}
      
              <label>Peso (kg):</label>
              <input
                type="text"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
              />
      
              <label>Idade:</label>
              <input
                type="number"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
              />
      
              <button onClick={calcularTMB}>Calcular TMB</button>
              {tmb && (
                <p>
                  TMB: <strong>{tmb} kcal/dia</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      );
      
}

export default Calculadora;