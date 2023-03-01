import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login/login.js';
import GradesPage from './pages/ViewGrades/grades.js';
import ProfilePage from './pages/Profile/profile.js';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/viewgrades" element={<GradesPage />} />
            <Route path="/viewprofile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
