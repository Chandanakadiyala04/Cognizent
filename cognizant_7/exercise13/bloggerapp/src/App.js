import React from 'react';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="divider-container">
        <div className="section">
          <CourseDetails />
        </div>
        <div className="vline"></div>
        <div className="section">
          <BookDetails />
        </div>
        <div className="vline"></div>
        <div className="section">
          <BlogDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
