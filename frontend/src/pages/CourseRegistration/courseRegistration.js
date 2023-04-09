import React, { useState } from 'react';
import './style.css'; // import CSS file
import Navbar from '../../components/navbar';

const courses = [
  { id: 1, name: 'Course 1', price: 10 },
  { id: 2, name: 'Course 2', price: 15 },
  { id: 3, name: 'Course 3', price: 20 }
];

function CourseRegistration() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCourseSelect = (event) => {
    const courseId = parseInt(event.target.value);
    const course = courses.find(c => c.id === courseId);
    if (selectedCourses.some(c => c.id === courseId)) {
      return; // course already selected, do nothing
    }
    const newSelectedCourses = [...selectedCourses, course];
    setSelectedCourses(newSelectedCourses);
    const newTotalPrice = totalPrice + course.price;
    setTotalPrice(newTotalPrice);
  };

  const handleCourseDeselect = (course) => {
    const index = selectedCourses.findIndex(c => c.id === course.id);
    if (index >= 0) {
      const newSelectedCourses = [...selectedCourses];
      newSelectedCourses.splice(index, 1);
      setSelectedCourses(newSelectedCourses);
      const newTotalPrice = totalPrice - course.price;
      setTotalPrice(newTotalPrice);
    }
  };

  return (
    <div>
      <Navbar />
    <div className="course-registration-container">
      <h1>Course Registration</h1>
      <p>Select the courses you want to register:</p>
      <select multiple className="course-selection" onChange={handleCourseSelect}>
        {courses.map(course => (
          <option key={course.id} value={course.id}>
            {course.name}
          </option>
        ))}
      </select>
      <ul className="selected-courses">
        {selectedCourses.map(course => (
          <li key={course.id}>
            {course.name}
            <button onClick={() => handleCourseDeselect(course)}>Deselect</button>
          </li>
        ))}
      </ul>
      {/* <p className="total-price">Total price: ${totalPrice}</p> */}
    </div>
    </div>
  );
}

export default CourseRegistration;
