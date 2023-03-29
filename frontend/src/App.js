import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login/login.js';
import GradesPage from './pages/ViewGrades/grades.js';
import ProfilePage from './pages/Profile/profile.js';
import CourseRegistration from './pages/CourseRegistration/courseRegistration';
import RequestIDCard from './pages/IdCard/requestCard';
import ScholarshipCard from './pages/Scholarship/scholarshipCard';
import PersonalDetails from './pages/Profile/personalDetails';
import AddressDetails from './pages/Profile/addressDetails';
import StudentDegreeDetails from './pages/Profile/studentDegree';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/viewgrades" element={<GradesPage />} />
            <Route path="/viewprofile" element={<ProfilePage />} >
              <Route index path="personalDetails" element={<PersonalDetails />} />
              <Route path="addressDetails" element={<AddressDetails />} />
              <Route path="studentDegree" element={<StudentDegreeDetails />} />
            </Route>
            <Route path="/courseRegistration" element={<CourseRegistration />} />
            <Route path="/requestIDCard" element={<RequestIDCard />} />
            <Route path="/scholarship" element={<ScholarshipCard />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
