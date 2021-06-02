import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../store/products';
import './Products.css';

const Products = () => {
  let products = useSelector(state => state.products);
  products = Object.values(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div id='product-page'>
      {products.map(product => (
        <div className='product-container' key={product.id}>
          {product.brand_name}
          <a href={`/products/${product.id}`}>{product.product_name}</a>
          {product.skincare_step}
        </div>
      ))}
    </div>
  )
}

export default Products;