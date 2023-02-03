import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login.js';
import GradesPage from './pages/grades.js';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/viewgrades" element={<GradesPage />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
