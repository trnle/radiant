import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRoutines } from '../../store/routines';
import { addRoutineProduct, removeRoutineProduct } from '../../store/routineProducts';
import Swal from 'sweetalert2'
import './RoutineProduct.css';

const RoutineProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userRoutines = useSelector(state => state.routines.userRoutines.user_routines);
  
  const [addRoutine, setAddRoutine] = useState('');
  const [removeRoutine, setRemoveRoutine] = useState('');
  
  useEffect(() => {
    dispatch(getRoutines());
  }, [dispatch])

  const handleAdd = e => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Product Added to Routine!',
    })
    dispatch(addRoutineProduct({ addRoutine, id }))
  }

  const handleRemove = e => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Product Removed from Routine!',
    })
    dispatch(removeRoutineProduct({ removeRoutine, id }))
  }

  if (!userRoutines) return null;

  return (
    <div id='rp-form-container'>
      <div className='rp-form'>
        <h4>Add Product to Routine</h4>
        <form method='post' onSubmit={handleAdd}>
          <select name='routines' className='rp-select' onChange={e => setAddRoutine(e.target.value)} value={addRoutine} required>
            <option value=''>Select Routine</option>
            {userRoutines.map(routine => (
              <option key={routine.id} value={routine.routine_type}>{routine.routine_type}</option>
            ))}
          </select>
          <button id='add-rp-btn'>Add</button>
        </form>
      </div>
      <div className='rp-form'>
        <h4>Remove Product from Routine</h4>
        <form method='post' onSubmit={handleRemove}>
          <select name='routines' className='rp-select' onChange={e => setRemoveRoutine(e.target.value)} value={removeRoutine} required>
            <option value=''>Select Routine</option>
            {userRoutines.map(routine => (
              <option key={routine.id} value={routine.routine_type}>{routine.routine_type}</option>
            ))}
          </select>
          <button id='remove-rp-btn'>Remove</button>
        </form>
      </div>
    </div>
  )
}

export default RoutineProduct;