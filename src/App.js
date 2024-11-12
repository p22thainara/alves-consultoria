import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StockControl from './components/stock/StockControl';
import ViewStock from './components/stock/ViewStock';
import ProductionControl from './components/production/ProductionControl';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard'; // Importar Dashboard
import { StockProvider } from './components/contexts/StockContext';

function App() {
  return (
    <StockProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Rota para o Dashboard */}
          <Route path="/stock" element={<StockControl />} />
          <Route path="/view-stock" element={<ViewStock />} />
          <Route path="/production" element={<ProductionControl />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </StockProvider>
  );
}

export default App;
