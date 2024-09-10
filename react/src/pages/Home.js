import React from 'react';
import bookLogo from '../assets/book-logo.png';

function Home() {
  return (
    <div id="home-page1">
   
      <h1 className="main-title">Dobrodošli na Platformu za Učenje</h1>
      <p className="app-description">Opis aplikacije:</p>
      <p className="app-explanation">Na ovoj platformi možete kreirati i pohađati kurseve. Kao nastavnik, možete dodavati nove kurseve, a kao student, možete pregledati i učiti iz dostupnih kurseva.</p>
      <img src={bookLogo} alt="Logo knjige" className="floating-logo "/>
    </div>
  );
}

export default Home;
