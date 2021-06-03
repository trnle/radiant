import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getProducts } from '../../store/products';
import CreateProductModal from './CreateProductModal';
import './Products.css';

const Products = () => {
  document.title = 'Products | Radiant';
  document.body.style = 'background-color: #FFFFFF';
  // const user = useSelector(state => state.session.user);
  let products = useSelector(state => state.products.allProducts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  
  if (!products) return null;

  return (
    <div id='products-page'>
      <h1>Products</h1>
      <CreateProductModal />
      {Object.values(products).map(product => (
        <div className='product-container' key={product.id}>
          {product.brand_name}
          <NavLink to={`/products/${product.id}`}>{product.product_name}</NavLink>
          {product.skincare_step}
        </div>
      ))}
    </div>
  )
}

export default Products;