import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { createOneProduct } from '../../../store/products';
import './CreateProductModal.css';

const CreateProductModal = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const userId = user.id;
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [skincareStep, setSkincareStep] = useState('');
  const [productImg, setProductImg] = useState('');
  const [description, setDescription] = useState('');
  const [directions, setDirections] = useState('');
  const [precautions, setPrecautions] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [target, setTarget] = useState('');
  const [checkAM, setCheckAM] = useState(false);
  const [checkPM, setCheckPM] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(createOneProduct({ productName, brandName, skincareStep, target, checkAM, checkPM, description, directions, precautions, ingredients, productImg, userId }));
  }

  return (
    <div className='modal'>
      <button id='product-modal-btn' onClick={() => setShowModal(true)} >
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
                <select name='skincare-step' onChange={e => setSkincareStep(e.target.value)} value={skincareStep}>
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
                <input type='checkbox' onChange={() => setCheckAM(!checkAM)} checked={checkAM} id='am' value='AM' />
                <label htmlFor="am">AM</label>
                <input type='checkbox' onChange={() => setCheckPM(!checkPM)} checked={checkPM} id='pm' value='PM' />
                <label htmlFor="pm">PM</label>
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
                  onChange={e => setTarget(e.target.value)}
                  value={target} />
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