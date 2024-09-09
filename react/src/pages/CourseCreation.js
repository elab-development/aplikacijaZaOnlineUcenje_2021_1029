import React, { useState } from 'react';


function CourseCreation() {
  const [courseName, setCourseName] = useState('');
  const [level, setLevel] = useState('Početnik');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Kurs "${courseName}" je uspešno kreiran!`);
  };

  return (
    <div id="create-course-page">
      <h2>Kreiraj novi kurs</h2>
      <form onSubmit={handleSubmit} className="course-form">
        <input
          type="text"
          placeholder="Naziv kursa"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
       
        <textarea
          placeholder="Opis kursa"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <select value={level} onChange={(e) => setLevel(e.target.value)}
          style={{ marginBottom: '20px' }}>
          <option value="Početnik">Početnik</option>
          <option value="Srednji nivo">Srednji nivo</option>
          <option value="Napredno">Napredno</option>
        </select>
        <button type="submit" className="blue-button">Kreiraj</button>
      </form>
    </div>
  );
}

export default CourseCreation;
