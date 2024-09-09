import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div id="home-page">
    <div className="buttons-container">
        <button className="home-button"><Link to="/">Početna</Link></button>
        <button className="home-button"><Link to="/create-course">Kreiraj kurs</Link></button>
        <button className="home-button"><Link to="/courses">Pregled kurseva</Link></button>
      </div>
    </div>
  );
}

export default Navigation;

