import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import routineIcon from '../../images/routine-icon.png';
import journalIcon from '../../images/journal-icon.png';
import productIcon from '../../images/product-icon.png';
import searchIcon from '../../images/search-icon.png';
import './Guide.css';

const RoutineGuideModal = () => {

  return (
    <div id='guide-page'>
      <h1>Key Features of Radiant</h1>
      <div className='feature-list'>
        <img src={routineIcon} alt='Routine checklist' />
        <div className='feature'>
          <h4>Create Your Routine</h4>
          <p>Add products to your routine. Products can be placed in your AM and/or PM routine.</p>
        </div>
      </div>
      <div className='feature-list'>
        <img src={productIcon} alt='Product' />
        <div className='feature'>
          <h4>Add Custom Products</h4>
          <p>You can add custom skincare products by selecting 'Add Product' on the Products page.
          Custom products can also be viewed by other users and added to their routines too.</p>
        </div>
      </div>
      <div className='feature-list'>
        <img src={searchIcon} alt='Search magnifying glass' />
        <div className='feature'>
          <h4>View & Filter Products</h4>
          <p>Use the search bar to look for specific product names. Use the filter dropdown menu
          on the Products page to browse products based on skincare step or by products you have added.</p>
        </div>
      </div>
      <div className='feature-list'>
        <img src={journalIcon} alt='Green journal' />
        <div className='feature'>
          <h4>Track Your Skin's Progress</h4>
          <p>Complete your AM and/or PM routine to create a journal entry. You can rate
            your skin progress, upload a photo of your skin, and log any additional information.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RoutineGuideModal;