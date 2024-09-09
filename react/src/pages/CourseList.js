import React, { useState, useEffect } from 'react';

function useCourseFilter(courses, levelFilter) {
  return courses.filter((course) => course.level === levelFilter || levelFilter === 'Svi nivoi');
}

function CourseList() {
  const [courses, setCourses] = useState([
    { name: 'React za početnike', description: 'Osnove React biblioteke.', level: 'Početnik', dateAdded: '2024-09-01' },
    { name: 'Napredni JavaScript', description: 'Duboko zaranjanje u JavaScript.', level: 'Srednji nivo', dateAdded: '2024-09-05' },
    { name: 'Uvod u Node.js', description: 'Osnove Node.js okruženja.', level: 'Napredno', dateAdded: '2024-09-07' },
    { name: 'HTML i CSS', description: 'Osnove web dizajna.', level: 'Početnik', dateAdded: '2024-09-02' },
    { name: 'Angular za početnike', description: 'Osnove Angular frameworka.', level: 'Početnik', dateAdded: '2024-09-10' },
    { name: 'UX/UI dizajn', description: 'Kreiranje korisničkih interfejsa.', level: 'Srednji nivo', dateAdded: '2024-09-12' },
    { name: 'Docker za developere', description: 'Korišćenje Dockera u developmentu.', level: 'Napredno', dateAdded: '2024-09-14' }
  ]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(5); 
  const [levelFilter, setLevelFilter] = useState('Svi nivoi'); 

  const filteredCourses = useCourseFilter(courses, levelFilter);

 
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id="courses-page">
      <h2>Dostupni kursevi</h2>

      <div className="filter-section">
        <label htmlFor="levelFilter">Filtriraj po nivou:</label>
        <select
          id="levelFilter"
          value={levelFilter}
          onChange={(e) => setLevelFilter(e.target.value)}
        >
          <option value="Svi nivoi">Svi nivoi</option>
          <option value="Početnik">Početnik</option>
          <option value="Srednji nivo">Srednji nivo</option>
          <option value="Napredno">Napredno</option>
        </select>
      </div>

 
      <ul>
        {currentCourses.map((course, index) => (
          <li key={index} className="course-item">
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <p><strong>Nivo:</strong> {course.level}</p>
            <p><strong>Dodat:</strong> {course.dateAdded}</p>
          </li>
        ))}
      </ul>

      
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredCourses.length / coursesPerPage) }, (_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
