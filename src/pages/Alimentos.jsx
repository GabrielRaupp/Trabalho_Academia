import React from 'react';
import '../styles/Alimentos.css';

function Alimentos() {
  const alimentos = [
    { nome: 'Frango grelhado', tipo: 'Proteína', beneficio: 'Ajuda na construção muscular' },
    { nome: 'Aveia', tipo: 'Carboidrato', beneficio: 'Boa fonte de energia' },
    { nome: 'Brócolis', tipo: 'Fibra', beneficio: 'Auxilia na digestão' },
    { nome: 'Banana', tipo: 'Fruta', beneficio: 'Rica em potássio' },
    { nome: 'Salmão', tipo: 'Gordura saudável', beneficio: 'Rico em ômega-3' },
  ];

  return (
    <div className="alimentos-container">
      <h2>Alimentos Recomendados</h2>
      <ul>
        {alimentos.map((item, index) => (
          <li key={index}>
            <strong>{item.nome}</strong> – {item.tipo}
            <br />
            <small>{item.beneficio}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Alimentos;
