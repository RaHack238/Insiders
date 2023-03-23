import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login/login.js';
import GradesPage from './pages/ViewGrades/grades.js';
import ProfilePage from './pages/Profile/profile.js';
import CourseRegistration from './pages/CourseRegistration/courseRegistration';
import RequestIDCard from './pages/IdCard/requestCard';
import ScholarshipCard from './pages/Scholarship/scholarshipCard';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/viewgrades" element={<GradesPage />} />
            <Route path="/viewprofile" element={<ProfilePage />} />
            <Route path="/courseRegistration" element={<CourseRegistration />} />
            <Route path="/requestIDCard" element={<RequestIDCard />} />
            <Route path="/scholarship" element={<ScholarshipCard />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
