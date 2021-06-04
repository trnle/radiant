import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { getOneProduct } from '../../store/products';
import EditProduct from './EditProduct';
import RoutineProduct from '../RoutineProduct';
import noProductImg from '../../images/product-img-placeholder.png';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let product = useSelector(state => state.products.oneProduct?.product);
  let productUser = useSelector(state => state.products.oneProduct?.user);
  const user = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [dispatch, id])
  
  if (!product) return null;
  document.title = `${product.product_name} | Radiant`;
  document.body.style = 'background-color: #FFFFFF';
  
  let timeOfUse = [];
  if (product.am_use) {
    timeOfUse.push('AM');
  }
  if (product.pm_use) {
    timeOfUse.push('PM');
  }

  if (product.img_url === '') product.img_url = noProductImg;

  return (
    <div id='product-page'>
      <NavLink to='/products'>Back to Products</NavLink>
      <div id='product-intro'>
        <img src={product.img_url} alt={product.product_name} />
        <p>Added by {productUser}</p>
        <h3>{product.product_name}</h3>
        <h4>{product.brand_name}</h4>
        <p>{product.description}</p>
        <p>Targets {product.target}</p>
      </div>
      <RoutineProduct />
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
      {productUser === user.username && <EditProduct />}
    </div>
  )
}

export default Product;