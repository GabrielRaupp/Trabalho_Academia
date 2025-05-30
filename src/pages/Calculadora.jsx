import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Calculadora.css';

function Calculadora() {
  const location = useLocation();

  // Função para extrair query params
  const getTipoFromUrl = () => {
    const params = new URLSearchParams(location.search);
    return params.get('tipo') || 'gastoCalorico';
  };

  const [tipoCalculadora, setTipoCalculadora] = useState(getTipoFromUrl());
  const [sexo, setSexo] = useState('masculino');
  const [idade, setIdade] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [pal, setPal] = useState(1.6);
  const [tmb, setTmb] = useState(null);
  const [get, setGet] = useState(null);
  const [resultadoNutricional, setResultadoNutricional] = useState('');
  const [resultadoHidratacao, setResultadoHidratacao] = useState('');

  // Atualizar quando mudar a URL
  useEffect(() => {
    setTipoCalculadora(getTipoFromUrl());
  }, [location.search]);

  const calcularGastoCalorico = () => {
    const alturaM = parseFloat(altura.replace(',', '.'));
    const p = parseFloat(peso);
    const i = parseInt(idade);
    let tmbCalc = 0;

    if (sexo === 'masculino') {
      if (i >= 10 && i <= 17) tmbCalc = (16.6 * p) + (77 * alturaM) + 572;
      else if (i >= 18 && i <= 29) tmbCalc = (15.4 * p) - (27 * alturaM) + 717;
      else if (i >= 30 && i <= 60) tmbCalc = (11.3 * p) + (16 * alturaM) + 901;
      else if (i > 60) tmbCalc = (8.8 * p) + (1128 * alturaM) - 1071;
    } else {
      if (i >= 10 && i <= 17) tmbCalc = (7.4 * p) + (482 * alturaM) + 217;
      else if (i >= 18 && i <= 29) tmbCalc = (13.3 * p) + (334 * alturaM) + 35;
      else if (i >= 30 && i <= 60) tmbCalc = (8.7 * p) - (25 * alturaM) + 865;
      else if (i > 60) tmbCalc = (9.2 * p) + (637 * alturaM) - 302;
    }

    setTmb(tmbCalc.toFixed(1));
    setGet((tmbCalc * pal).toFixed(1));
  };

  const avaliarNutricional = () => {
    const p = parseFloat(peso);
    const getValue = parseFloat(get);
    const carboidratoMin = 3 * p;
    const carboidratoMax = 12 * p;
    const proteinaMin = 1.2 * p;
    const proteinaMax = 2 * p;
    const gorduraMin = (getValue * 0.20) / 9;
    const gorduraMax = (getValue * 0.30) / 9;

    let resultado = `Recomendações baseadas na OMS/NIH:\n\n`;
    resultado += `Carboidratos: ${carboidratoMin.toFixed(0)}g - ${carboidratoMax.toFixed(0)}g/dia\n`;
    resultado += `Proteínas: ${proteinaMin.toFixed(0)}g - ${proteinaMax.toFixed(0)}g/dia\n`;
    resultado += `Gorduras: ${gorduraMin.toFixed(0)}g - ${gorduraMax.toFixed(0)}g/dia\n`;
    resultado += `Sódio: < 5g/dia\n`;
    resultado += `Frutas/Vegetais: >= 400g/dia\n`;
    resultado += `Fibras, grãos, leguminosas e oleaginosas: incluir diariamente\n`;

    setResultadoNutricional(resultado);
  };

  const calcularHidratacao = () => {
    const p = parseFloat(peso);
    let preTreinoMin = p * 5;
    let preTreinoMax = p * 10;

    let resultado = `Recomendações de Hidratação:\n\n`;
    resultado += `Pré-treino: ${preTreinoMin.toFixed(0)}ml - ${preTreinoMax.toFixed(0)}ml\n`;
    resultado += `Durante exercício: 400ml/h - 800ml/h\n`;
    resultado += `Pós-treino: 1.25L - 1.5L por kg de peso perdido\n`;

    setResultadoHidratacao(resultado);
  };

  const estiloPorTipo = () => {
    switch (tipoCalculadora) {
      case 'gastoCalorico': return { borderColor: '#00ff88' };
      case 'nutricao': return { borderColor: '#ffa500' };
      case 'hidratacao': return { borderColor: '#3399ff' };
      default: return {};
    }
  };

  return (
    <div className="calculadora-container">
      <div className="calculadora-content">
        <div className="form-group" style={estiloPorTipo()}>
          <h2>Calculadora</h2>
          
          <h3>
          {tipoCalculadora === 'gastoCalorico' && 'Calculadora de Gasto Calórico'}
          {tipoCalculadora === 'nutricao' && 'Calculadora de Nutrição'}
          {tipoCalculadora === 'hidratacao' && 'Calculadora de Hidratação'}
        </h3>
        
          <label>Sexo:</label>
          <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>

          <label>Idade:</label>
          <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />

          <label>Peso (kg):</label>
          <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />

          <label>Altura (m):</label>
          <input type="text" value={altura} onChange={(e) => setAltura(e.target.value)} />

          {tipoCalculadora === 'gastoCalorico' && (
            <>
              <label>PAL (nível de atividade):</label>
              <select value={pal} onChange={(e) => setPal(parseFloat(e.target.value))}>
                <option value={1.5}>Sedentário (1.4-1.69)</option>
                <option value={1.8}>Moderado (1.7-1.99)</option>
                <option value={2.2}>Vigoroso (2.0-2.4)</option>
              </select>

              <button onClick={calcularGastoCalorico}>Calcular</button>
              {tmb && <p>TMB: <strong>{tmb} kcal/dia</strong></p>}
              {get && <p>Gasto Energético Total (GET): <strong>{get} kcal/dia</strong></p>}
            </>
          )}

          {tipoCalculadora === 'nutricao' && (
            <>
              <button onClick={avaliarNutricional}>Avaliar Nutrição</button>
              {resultadoNutricional && <pre>{resultadoNutricional}</pre>}
            </>
          )}

          {tipoCalculadora === 'hidratacao' && (
            <>
              <button onClick={calcularHidratacao}>Calcular Hidratação</button>
              {resultadoHidratacao && <pre>{resultadoHidratacao}</pre>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
