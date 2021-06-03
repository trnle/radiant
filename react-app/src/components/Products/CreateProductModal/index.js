import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './CreateProductModal.css';

const CreateProductModal = () => {
  const user = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [productImg, setProductImg] = useState('');
  const [description, setDescription] = useState('');
  const [directions, setDirections] = useState('');
  const [precautions, setPrecautions] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [targets, setTargets] = useState('');
  
  const handleSubmit = async e => {
    e.preventDefault();
  }

  return (
    <div className='modal'>
      <button onClick={() => setShowModal(true)} >
        Add Product
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <form id='create-product-form' onSubmit={handleSubmit}>
            <div id='create-product-header'>
              <h1>New Product</h1>
              <p>Add a custom product to your routine</p>
            </div>
            <div id='create-product-fields'>
              <div id='product-name-input'>
                <label>Product Name*</label>
                <input type='text'
                  placeholder='Product Name'
                  onChange={e => setProductName(e.target.value)}
                  value={productName} />
              </div>
              <div id='brand-name-input'>
                <label>Brand Name*</label>
                <input type='text'
                  placeholder='Brand Name'
                  onChange={e => setBrandName(e.target.value)}
                  value={brandName} />
              </div>
              <div id='skincare-step-input'>
                <label>Skincare Step*</label>
                <select name='skincare-step' id=''>
                  <option value=''></option>
                  <option value='Cleanse'>Cleanse</option>
                  <option value='Treat'>Treat</option>
                  <option value='Nourish'>Nourish</option>
                  <option value='Moisturize'>Moisturize</option>
                  <option value='Protect'>Protect</option>
                  <option value='Miscellaneous'>Miscellaneous</option>
                </select>
              </div>
              <div id='time-input'>
                <label>Time of Use*</label>
                <input type='checkbox' id='am' value='AM' /> AM
                <input type='checkbox' id='pm' value='PM' /> PM
             </div>
              <div id='product-img-input'>
                <label>Product Image</label>
                <input type='text'
                  placeholder='Insert Image URL'
                  onChange={e => setProductImg(e.target.value)}
                  value={productImg} />
              </div>
             <div id='target-input'>
                <label>Target</label>
                <input type='text'
                  placeholder='Targets...'
                  onChange={e => setTargets(e.target.value)}
                  value={targets} />
             </div>
            
              <div id='description-input'>
                <label>Product Description*</label>
                <textarea
                  name='description'
                  placeholder='What is this product'
                  onChange={e => setDescription(e.target.value)}
                  value={description}
                  cols='20'
                  rows='4'>
                </textarea>
              </div>
             <div id='directions-input'>
                <label>How to Use</label>
                <textarea
                  name='directions'
                  placeholder='How should this product be used?'
                  onChange={e => setDirections(e.target.value)}
                  value={directions}
                  cols='7'
                  rows='7'>
                </textarea>
             </div>
             <div id='precautions-input'>
                <label>Precautions</label>
                <input type='text'
                  placeholder='Precautions'
                  onChange={e => setPrecautions(e.target.value)}
                  value={precautions} />

             </div>
             <div id='ingredients-input'>
                <label>Ingredients</label>
                <textarea
                  name='ingredients'
                  placeholder='Ingredients'
                  onChange={e => setIngredients(e.target.value)}
                  value={ingredients}
                  cols='7'
                  rows='7'>
                </textarea>
             </div>
             
            </div>
            <button
              type='button'
              id='cancel-product-btn'
              onClick={() => setShowModal(false)}>Cancel</button>
            <button id='add-product-btn' type='submit'>Add Product</button>
          </form>
        </Modal>
      )}
    </div>
  )
}

export default CreateProductModal;