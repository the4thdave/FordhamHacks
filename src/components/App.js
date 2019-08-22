import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Intro from './Intro'
import About from './About'
import Tracks from './Tracks'
import Schedule from "./Schedule";
import Faq from "./FAQ";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
      </header>
        <Intro/>
        <About/>
        <Tracks/>
        <Schedule/>
        <Faq/>
    </div>
  );
}

export default App;
