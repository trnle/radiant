import React from 'react';
import './Splash.css';

const Splash = () => {
  document.title = 'Radiant';
  document.body.style = 'background-color: #E5AA8B';
  return (
    <div id='splash-container'>
      <h1>Welcome to Radiant.</h1>
      <h3>Create personalized routines for your skincare & beauty treatments</h3>
      <button>Demo User</button>
    </div>
  )
}

export default Splash;