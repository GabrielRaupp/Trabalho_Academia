import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cadastro from './pages/cadastro';
import Dashboard from './pages/Dashboard';
import Calculadora from './pages/Calculadora';
import Alimentos from './pages/Alimentos';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/alimentos" element={<Alimentos />} />
      </Routes>
    </Router>
  );
}

export default App;
