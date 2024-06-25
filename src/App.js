// Example change
// Example change 2
// Example change 3

import React from 'react';
import './App.css';
import about from './components/about';
import skills from './components/skills';
import projects from './components/projects';
import certifications from './components/certifications';
import contact from './components/contact';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>
      </header>
      <section id="landing">
        <h1>Hi, my name is Caleb</h1>
      </section>
      <about />
      <skills />
      <projects />
      <certifications />
      <contact />
    </div>
  );
}

export default App;
