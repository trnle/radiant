import React from 'react';
import DemoButton from '../Auth/DemoButton';
import './Splash.css';

const Splash = () => {
  document.title = 'Radiant';
  document.body.style = 'background-color: #E5AA8B';
  
  return (
    <div id='splash-container'>
      <div id='splash-header'>
        <h1>Welcome to Radiant.</h1>
        <h3>Create personalized routines for your skincare & beauty treatments</h3>
        <DemoButton />
      </div>
    </div>
  )
}

export default Splash;