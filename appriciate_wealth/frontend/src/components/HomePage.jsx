import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        <li><Link to="/chatbot">Chatbot</Link></li>
        <li><Link to="/translator">Translator</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
}

export default HomePage;
