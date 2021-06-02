import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../store/products';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let product = useSelector(state => state.products.oneProduct);
  let timeOfUse = [];
  if (product.am_use) {
    timeOfUse.push('AM');
  }
  if (product.pm_use) {
    timeOfUse.push('PM');
  }

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [dispatch, id])

  return (
    <div id='product-page'>
      <div id='product-intro'>
        <img src={product.img_url} alt={`Image of ${product.product_name}`} />
        <h3>{product.product_name}</h3>
        <h4>{product.brand_name}</h4>
        <p>{product.description}</p>
        <p>{product.target}</p>
      </div>
      <div id='product-summary'>
        <h4>Summary</h4>
        <p>{product.skincare_step}</p>
        <p>{`Suggested time of use: ${timeOfUse}`}</p>
        <p>{product.ingredients}</p>
      </div>

    </div>
  )
}

export default Product;