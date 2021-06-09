import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { getProducts} from '../../../store/products';
import './SearchBar.css'

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector(state => state.products.allProducts)
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = Object.values(products).filter(product => (product.product_name).toLowerCase().includes(searchTerm));
    setSearchResults(results)
    if (!results || searchTerm === '') {
      setSearchResults('')
    }
  }, [searchTerm])

  return (
    <div id='search-container'>
      <span className="fas fa-search"></span>
      <input
        type="text"
        id='search-input'
        placeholder='Search products...'
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
        onFocus={useEffect(() => {
          dispatch(getProducts())
        }, [dispatch])}
        onClick={() => setSearchResults('')}
        
      />
      <div id='results-container'>
        {searchResults.length > 0 && searchResults.map(result => (
          <div key={result.id} id='product-res-container' onClick={() => {
            history.push(`/products/${result.id}`)
          }}>
            <p>{result.brand_name} - {result.product_name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchBar;