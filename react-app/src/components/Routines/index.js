import React, { useEffect, userEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { getRoutines } from '../../store/routines';
import './Routines.css';

const Routines = () => {
  document.title = 'Home | Radiant';
  document.body.style = 'background-color: #FFFFFF';

  const dispatch = useDispatch();
  const history = useHistory();
  const userRoutines = useSelector(state => state.routines.userRoutines);
  const amRoutine = userRoutines?.AM;
  const pmRoutine = userRoutines?.PM;

  useEffect(() => {
    dispatch(getRoutines());
  }, [dispatch])

  if (!amRoutine || !pmRoutine) return null

  return (
    <div id='routines-page'>
      <h2>AM Routine</h2>
      {amRoutine.map(product => (
        <div key={product.id} className='rp-container' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>
          <img src={product.img_url} alt={product.product_name} height='50' />
          {product.product_name}
        </div>
      ))}
      <h2>PM Routine</h2>
      {pmRoutine.map(product => (
        <div key={product.id} className='rp-container' onClick={e => { e.preventDefault(); history.push(`/products/${product.id}`) }}>
          <img src={product.img_url} alt={product.product_name} height='50' />
          {product.product_name}
        </div>
      ))}
    </div>
  )
}

export default Routines;