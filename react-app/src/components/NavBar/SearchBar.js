import React from 'react';

const SearchBar = () => {
  return (
    <>
      <span className="fas fa-search"></span>
      <input type="text" id='search-input' placeholder='Search products...' />
    </>
  )
}

export default SearchBar;