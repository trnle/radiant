import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getProducts } from '../../store/products';
import CreateProductModal from './CreateProductModal';
import './Products.css';

const Products = () => {
  document.title = 'Products | Radiant';
  document.body.style = 'background-color: #FFFFFF';

  let products = useSelector(state => state.products.allProducts);
  const dispatch = useDispatch();
  const history = useHistory();

  const [filter, setFilter] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  console.log(filter, 'fdsfj=filter-------')
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  
  if (!products) return null;

  return (
    <div id='products-page'>
      <h1>Products</h1>
      <CreateProductModal />
      <div>
        <label>Filter</label>
        <select id="filter" onChange={e => setFilter(e.target.value)}>
          <option value=""></option>
          <option value="Cleanse">Cleanse</option>
          <option value="Treat">Treat</option>
          <option value="Nourish">Nourish</option>
          <option value="Moisturize">Moisturize</option>
          <option value="Protect">Protect</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div id='product-grid'>
        {Object.values(products).map(product => (
          <div className='product-container' key={product.id} onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>
            <div id='products-imgs'>
              <img src={product.img_url} alt={product.product_name} />
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
  )
}

export default Products;