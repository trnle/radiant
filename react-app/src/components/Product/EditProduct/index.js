import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateOneProduct, deleteOneProduct } from '../../../store/products';
import Swal from 'sweetalert2'
import './EditProduct.css';

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const product = useSelector(state => state.products.oneProduct?.product);
  const user = useSelector(state => state.session.user);
  
  const userId = user.id;
  const productId = product.id;

  // const [showForm, setShowForm] = useState(false);
  const [productName, setProductName] = useState(product.product_name);
  const [brandName, setBrandName] = useState(product.brand_name);
  const [skincareStep, setSkincareStep] = useState(product.skincare_step);
  const [productImg, setProductImg] = useState(product.img_url);
  const [description, setDescription] = useState(product.description);
  const [directions, setDirections] = useState(product.directions);
  const [precautions, setPrecautions] = useState(product.precautions);
  const [ingredients, setIngredients] = useState(product.ingredients);
  const [target, setTarget] = useState(product.target);
  const [checkAM, setCheckAM] = useState(product.am_use);
  const [checkPM, setCheckPM] = useState(product.pm_use);

  const updateProduct = e => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Product Updated!',
    })
    dispatch(updateOneProduct({ productName, brandName, skincareStep, target, checkAM, checkPM, description, directions, precautions, ingredients, productImg, userId, productId }))
  }

  const deleteProduct = e => {
    e.preventDefault();
    Swal.fire({
      title: 'Delete Product',
      text: 'Are you sure you want to delete this product permanently?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      reverseButtons: true
    }).then(async res => {
      if (res.value) {
        await dispatch(deleteOneProduct(productId));
        history.push('/products');
      }
    })
  }

  return (
    <div>
      <form action={`/product/${productId}`} method='post' onSubmit={updateProduct}>
        <div id='edit-product-fields'>
          <div id='left-edit-product-form'>
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
            <div id='edit-time-box-align'>
              <div className='time-box'>
                <input type='checkbox' onChange={() => setCheckAM(!checkAM)} checked={checkAM} id='am' value='AM' />
                <label htmlFor="am">AM</label>
              </div>
              <div className='edit-time-box'>
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
          <div id='right-edit-product-form'>
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
        <button id='update-product-btn' type='submit'>Update Product</button>
        <button id='delete-product-btn' onClick={deleteProduct}>Delete Product</button>
      </form>
    </div>
  )
}

export default UpdateProduct;