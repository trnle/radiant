import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { getOneProduct } from '../../store/products';
import EditProduct from './EditProduct';
import RoutineProduct from '../RoutineProduct';
import noProductImg from '../../images/product-placeholder.png';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
      <div id='nav-products'>
        <span className="fas fa-arrow-left"></span>
        <NavLink to='/products'>Back to Products</NavLink>
      </div>
      <div id='product-intro'>
        <div id='product-image'>
          <img src={product.img_url} alt={product.product_name} />
        </div>
        <div id='product-info'>
          <h3>{product.product_name}</h3>
          <h4>{product.brand_name}</h4>
          <p>{product.description}</p>
          <div id='target-info'>
            <p>TARGETS...</p>
            <p>{product.target}</p>
          </div>
          <div id='product-added-by'>
            <p>Added by {productUser} ✨</p>
          </div>
        </div>
      </div>
      <div id='product-summary'>
        <div id='summary-settings'>
          <Tabs>
            <TabList>
              <Tab>Summary</Tab>
              <Tab>Routine</Tab>
              {productUser === user.username && <Tab>Edit Product</Tab>}
            </TabList>
            <TabPanel>
              <div className='summary'>
                <h4>Skincare Step</h4>
                <p>{product.skincare_step}</p>
              </div>
              <div className='summary'>
                <h4>Suggested Time of Use</h4>
                {timeOfUse.map(time => (
                  <li key={time}>{time}</li>
                ))}
                {/* <p>{timeOfUse}</p> */}
              </div>
              <div className='summary'>
                <h4>How to Use</h4>
                <p>{product.directions}</p>
              </div>
              <div className='summary'>
                <h4>Precautions</h4>
                <p>{product.precautions}</p>
              </div>
              <div className='summary'>
                <h4>Ingredients</h4>
                <p>{product.ingredients}</p>
              </div>
            </TabPanel>
            <TabPanel>
              <RoutineProduct />
            </TabPanel>
            {productUser === user.username && 
              <TabPanel>
                <EditProduct />
              </TabPanel>
            }
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Product;