import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../store/products';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let product = useSelector(state => state.products.oneProduct?.product);
  console.log('productktja;lkjte;wlktj;wlet',product)
  let productUser = useSelector(state => state.products.oneProduct?.user);

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [dispatch, id])

  if (!product) return null;

  let timeOfUse = [];
  if (product.am_use) {
    timeOfUse.push('AM');
  }
  if (product.pm_use) {
    timeOfUse.push('PM');
  }

  

  return (
    <div id='product-page'>
      <div id='product-intro'>
        <img src={product.img_url} alt={`Image of ${product.product_name}`} />
        <p>Added by {productUser}</p>
        <h3>{product.product_name}</h3>
        <h4>{product.brand_name}</h4>
        <p>{product.description}</p>
        <p>{product.target}</p>
      </div>
      <div id='product-summary'>
        <h4>Summary</h4>
        <div>
          Skincare Step
          <p>{product.skincare_step}</p>
        </div>
        <p>{`Suggested time of use: ${timeOfUse}`}</p>
        <div>
          How to Use
          <p>{product.directions}</p>
        </div>
        <div>
          Precautions
          <p>{product.precautions}</p>
        </div>
        <div>
          Ingredients
          <p>{product.ingredients}</p>
        </div>
      </div>
    </div>
  )
}

export default Product;