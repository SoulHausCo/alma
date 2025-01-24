import React from 'react';
import './App.css'; // Import the CSS file
import './Normalize.css'; // Import the CSS file

import logo from './assets/images/images.jpg'; // Import your logo
import whatsappIcon from './assets/images/whatsapp.webp'; // Import your Whatsapp icon
import websiteIcon from './assets/images/web.png'; // Import your Website icon
import instagramIcon from './assets/images/instagram.webp'; // Import your Instagram icon

const App = () => {
  return (
    <div className="app">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <p className="construction-text">Hola <b>Estefanía Arango García</b></p>
      <p className="construction-text">Desde Alma esperamos que hoy estes muy bien</p>
      <p className="construction-text">A través de este sitio queremos ofrecer discupas por situaciones del pasado</p>
      <p className="construction-text">Por eso venimos acá con los ánimos de que no nos odies en secreto </p>
      <p className="construction-text">Te queremos invitar a que pases una noche en el domo con Alma</p>
      <p className="construction-text">🏳️ esto son señales de paz 🏳️ </p>

      <a href="https://api.whatsapp.com/send?phone=573134523232&text=Hola%20Denny%2C%20acepto%20tus%20disculpas%20" className="link">
          <img src={whatsappIcon} alt="Whatsapp" className="link-icon" /> Whatsapp
        </a>
    </div>
  );
}

export default App;