import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getProducts } from '../../store/products';
import CreateProductModal from './CreateProductModal';
import './Products.css';

const Products = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  let products = useSelector(state => state.products.allProducts);
  const user = useSelector(state => state.session.user);
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    document.title = 'Products | Radiant';
    document.body.style = 'background-color: #FFFFFF';
  }, []);

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])


  let filteredProducts;
  if (filter === 'My Products') {
    filteredProducts = Object.values(products).filter(product => product.user_id === user.id)
  } else {
    filteredProducts = Object.values(products).filter(product => product.skincare_step === filter)
  }

  if (filteredProducts.length === 0) {
    filteredProducts = products;
  } 
  
  if (!products) return null;

  return (
    <div id='products-page'>
      <div>
        <h1>Products</h1>
        <CreateProductModal />
        <div id='filter-container'>
          <label>Filter</label>
          <select id="filter" onChange={e => setFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Cleanse">Cleanse</option>
            <option value="Treat">Treat</option>
            <option value="Nourish">Nourish</option>
            <option value="Moisturize">Moisturize</option>
            <option value="Protect">Protect</option>
            <option value="Other">Other</option>
            <option value="My Products">My Products</option>
          </select>
        </div>
        <div id='product-grid'>
          {Object.values(filteredProducts).map(product => (
            <div className='product-container' key={product.id} onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>
              <div id='products-imgs'>
                {product.img_url && <img src={product.img_url} alt={product.product_name} />}
              </div>
              <div id='products-overview'>
                <NavLink to={`/products/${product.id}`}>{product.product_name}</NavLink>
                <h4>{product.brand_name}</h4>
                <p>{product.description}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Products;