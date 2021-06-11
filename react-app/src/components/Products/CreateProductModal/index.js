import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createOneProduct } from '../../../store/products';
import './CreateProductModal.css';

const CreateProductModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
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

  const handleSubmit = async e => {
    e.preventDefault();

    const product = await dispatch(createOneProduct({ productName, brandName, skincareStep, target, checkAM, checkPM, description, directions, precautions, ingredients, productImg, userId }));
    history.push(`/products/${product.id}`);
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
              <p>Add a custom product to your routine.</p>
            </div>
            <div id='create-product-fields'>
              <div id='left-product-form'>
                <label>Product Name*</label>
                <input type='text'
                  placeholder='Product Name'
                  onChange={e => setProductName(e.target.value)}
                  value={productName}
                  required />
                <label>Brand Name*</label>
                <input type='text'
                  placeholder='Brand Name'
                  onChange={e => setBrandName(e.target.value)}
                  value={brandName}
                  required />
                <label>Skincare Step*</label>
                <select name='skincare-step' onChange={e => setSkincareStep(e.target.value)} value={skincareStep} required>
                  <option value=''></option>
                  <option value='Cleanse'>Cleanse</option>
                  <option value='Treat'>Treat</option>
                  <option value='Nourish'>Nourish</option>
                  <option value='Moisturize'>Moisturize</option>
                  <option value='Protect'>Protect</option>
                  <option value='Other'>Other</option>
                </select>
                <label>Time of Use</label>
                <div id='time-box-align'>
                  <div className='time-box'>
                    <input type='checkbox' onChange={() => setCheckAM(!checkAM)} checked={checkAM} id='am' value='AM' />
                    <label htmlFor="am">AM</label>
                  </div>
                  <div className='time-box'>
                    <input type='checkbox' onChange={() => setCheckPM(!checkPM)} checked={checkPM} id='pm' value='PM' />
                    <label htmlFor="pm">PM</label>
                  </div>
                </div>
                <label>Product Image</label>
                <input type='text'
                  placeholder='Insert Image URL'
                  onChange={e => setProductImg(e.target.value)}
                  value={productImg} />
                <label>Targets</label>
                <input type='text'
                  placeholder='Targets...'
                  onChange={e => setTarget(e.target.value)}
                  value={target} />
                <label>Precautions</label>
                <input type='text'
                  placeholder='Precautions'
                  onChange={e => setPrecautions(e.target.value)}
                  value={precautions} />
              </div>
              <div id='right-product-form'>
                <label>Product Description*</label>
                <textarea
                  name='description'
                  placeholder='What is this product'
                  onChange={e => setDescription(e.target.value)}
                  value={description}
                  cols='5'
                  rows='7'
                  required>
                </textarea>
                <label>How to Use</label>
                <textarea
                  name='directions'
                  placeholder='How should this product be used?'
                  onChange={e => setDirections(e.target.value)}
                  value={directions}
                  cols='5'
                  rows='7'>
                </textarea>
                <label>Ingredients</label>
                <textarea
                  name='ingredients'
                  placeholder='Ingredients'
                  onChange={e => setIngredients(e.target.value)}
                  value={ingredients}
                  cols='5'
                  rows='7'>
                </textarea>
              </div>
            </div>
            <button id='add-product-btn' type='submit'>Add Product</button>
            <button type='button' id='cancel-product-btn' onClick={() => setShowModal(false)}>Cancel</button>
          </form>
        </Modal>
      )}
    </div>
  )
}

export default CreateProductModal;