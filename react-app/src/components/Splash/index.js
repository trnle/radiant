import React from 'react';
import DemoButton from '../Auth/DemoButton';
// import routineIcon from '../../images/routine-icon.png';
// import journalIcon from '../../images/journal-icon.png';
// import productIcon from '../../images/product-icon.png';
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
      {/* <div id='preview-container'>
        <img src={routineIcon} />
        <img src={productIcon} />
        <img src={journalIcon} />
      </div> */}
    </div>
  )
}

export default Splash;