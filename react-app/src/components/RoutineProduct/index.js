import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRoutines } from '../../store/routines';
import { addRoutineProduct, removeRoutineProduct } from '../../store/routineProducts';
import './RoutineProduct.css';

const RoutineProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userRoutines = useSelector(state => state.routines.userRoutines.user_routines);
  // const [showAddRoutines, setAddShowRoutines] = useState(false);
  // const [showRemoveRoutines, setShowRemoveRoutines] = useState(false);
  const [addRoutine, setAddRoutine] = useState('');
  const [removeRoutine, setRemoveRoutine] = useState('');
  
  useEffect(() => {
    dispatch(getRoutines());
  }, [dispatch])

  const handleAdd = e => {
    e.preventDefault();
    console.log('===========', addRoutine)
    dispatch(addRoutineProduct({ addRoutine, id }))
  }

  const handleRemove = e => {
    e.preventDefault();
    dispatch(removeRoutineProduct({ removeRoutine, id }))
  }

  if (!userRoutines) return null;

  return (
    <div id='rp-form-container'>
      {/* <button onClick={() => setAddShowRoutines(!showAddRoutines)}>Add to Routine</button> */}
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

      {/* <button onClick={() => setShowRemoveRoutines(!showRemoveRoutines)}>Remove from Routine</button> */}
      <div className='rp-form'>
        <h4>Remove Product to Routine</h4>
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