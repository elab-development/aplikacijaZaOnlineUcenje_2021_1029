import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CourseCreation from './pages/CourseCreation';
import CourseList from './pages/CourseList';
import Navigation from './components/Navigation';
import './App.css';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-course" element={<CourseCreation />} />
        <Route path="/courses" element={<CourseList />} />
      </Routes>
    </Router>
  );
}

export default App;
