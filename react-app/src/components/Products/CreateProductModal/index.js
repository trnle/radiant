import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const CreateProductModal = () => {
  const user = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [productImg, setProductImg] = useState('');
  const [description, setDescription] = useState('');
  const [directions, setDirections] = useState('');
  const [precautions, setPrecautions] = useState('');
  
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
          <form className='' onSubmit={handleSubmit}>
            <h1>New Product</h1>
            <div className='form-label-input'>
              <label>Product Name</label>
              <input type='text'
                placeholder='Product Name'
                onChange={e => setProductName(e.target.value)}
                value={productName} />
              <label>Brand Name</label>
              <input type='text'
                placeholder='Brand Name'
                onChange={e => setBrandName(e.target.value)}
                value={brandName} />
              <label>Product Description</label>
              <textarea
                name='description'
                placeholder='What is this product'
                onChange={e => setDescription(e.target.value)}
                value={description}
                cols='7'
                rows='7'>
              </textarea>
              <label>How to Use</label>
              <textarea
                name='directions'
                placeholder='How should this product be used?'
                onChange={e => setDirections(e.target.value)}
                value={directions}
                cols='7'
                rows='7'>  
              </textarea>
              <label>Precautions</label>
              <input type='text'
                placeholder='Precautions'
                onChange={e => setPrecautions(e.target.value)}
                value={precautions} />
              <label>Product Image</label>
              <input type='text'
                placeholder='Insert Image URL'
                onChange={e => setProductImg(e.target.value)}
                value={productImg} />
                
            </div>
            <div className='form-label-input'></div>
            <div className='form-label-input'></div>
            <button id='add-product-btn' type='submit'>Submit</button>
            <button
              type='button'
              id='cancel-product-btn'
              onClick={() => setShowModal(false)}>Cancel</button>
          </form>
        </Modal>
      )}
    </div>
  )
}

export default CreateProductModal;