import React from 'react';

function CourseForm({ onSubmit, courseName, setCourseName }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Naziv kursa"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <button type="submit">Kreiraj</button>
    </form>
  );
}

export default CourseForm;
