import React, { useEffect } from 'react';
import routineIcon from '../../images/routine-icon.png';
import journalIcon from '../../images/journal-icon.png';
import productIcon from '../../images/product-icon.png';
import searchIcon from '../../images/search-icon.png';
import './Guide.css';

const RoutineGuideModal = () => {
  useEffect(() => {
    document.title = 'About Us | Radiant';
    document.body.style = 'background-color: #FFFFFF';
  }, []);
  
  return (
    <div id='guide-page'>
      <h1>About Radiant</h1>
      <h3>
        Radiant helps you envision your skincare routine as a series of concepts.
      </h3>
      {/* Skincare info from Jude Chao: https://fiftyshadesofsnail.com/2018/06/03/5-step-k-beauty-skincare-routine/ */}
      <div id='skincare-steps-explained'>
        <h4>1 CLEANSE</h4>
        <p>
          Removes makeup, sunscreen, dirt, excess dead skin and oils, and environmental
          pollutants from the surface of skin. Prepares skin for further skincare steps
          and prevents issues caused by unclean skin.
        </p>
        <h4>2 TREAT</h4>
        <p>
          Intensively targets specific skin concerns, like acne, “blackheads,” hyperpigmentation, or visible skin aging.
        </p>
        <h4>3 NOURISH</h4>
        <p>
          More gently treats skin concerns and supports overall skin health and comfort.
        </p>
        <h4>4 MOISTURIZE</h4>
        <p>
          Seals hydration and helpful ingredients from previous steps into skin to maximize benefits; maintains skin softness and comfort.
        </p>
        <h4>5 PROTECT</h4>
        <p>
          Shields skin from UV radiation to prevent skin cancer, visible skin aging, and hyperpigmentation due to photodamage.
        </p>
      </div>
      <h1>Key Features</h1>
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