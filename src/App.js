import React from 'react';
import './App.css'; // Import the CSS file
import './Normalize.css'; // Import the CSS file

import logo from './assets/images/logo.png'; // Import your logo
import whatsappIcon from './assets/images/whatsapp.webp'; // Import your Whatsapp icon
import websiteIcon from './assets/images/web.png'; // Import your Website icon
import instagramIcon from './assets/images/instagram.webp'; // Import your Instagram icon

const App = () => {
  return (
    <div className="app">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <p className="construction-text">Estamos echando raices 👷🏾🏗️</p>
      <div className="links">
        <a href="https://api.whatsapp.com/send?phone=573134523232&text=Hola%20Alma%2C%20quiero%20una%20planta%20con%20alma!" className="link">
          <img src={whatsappIcon} alt="Whatsapp" className="link-icon" /> Whatsapp
        </a>
        <a href="https://almavariegada.com" className="link">
          <img src={websiteIcon} alt="Website" className="link-icon" /> Website
        </a>
        <a href="https://instagram.com/almavariegada" className="link">
          <img src={instagramIcon} alt="Instagram" className="link-icon" /> Instagram
        </a>
      </div>
      <footer>
        <p className="footer-text">Alma variegada, plantas con alma. 💚</p>
      </footer>
    </div>
  );
}

export default App;