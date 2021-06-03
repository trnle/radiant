import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateOneProduct, getOneProduct } from '../../../store/products';

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let product = useSelector(state => state.products.oneProduct?.product);
  const user = useSelector(state => state.session.user);
  const userId = user.id;
  const productId = product.id;

  const [showForm, setShowForm] = useState(false);
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

  const updateProduct = async e => {
    e.preventDefault();
    const product = await dispatch(updateOneProduct({ productName, brandName, skincareStep, target, checkAM, checkPM, description, directions, precautions, ingredients, productImg, userId, productId }))
    history.push(`/products/${product.id}`);
  }

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>Edit Product</button>
      {showForm && <form onSubmit={updateProduct}>
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
        <button id='update-product-btn' type='submit'>Update Product</button>
      </form>}
    </div>
  )
}

export default UpdateProduct;