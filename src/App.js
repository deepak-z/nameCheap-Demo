import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  const linkedinUrl = 'https://in.linkedin.com/in/deepak-kumar-7812171ab'; // Replace with your actual LinkedIn URL

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} /> My LinkedIn Profile
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
