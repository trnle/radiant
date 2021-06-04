import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRoutines } from '../../store/routines';
import { addRoutineProduct } from '../../store/routineProducts';

const RoutineProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userRoutines = useSelector(state => state.routines.userRoutines.user_routines);
  const [showAddRoutines, setAddShowRoutines] = useState(false);
  const [showRemoveRoutines, setShowRemoveRoutines] = useState(false);
  const [routine, setRoutine] = useState(false);
  
  useEffect(() => {
    dispatch(getRoutines());
  }, [dispatch])
  
  const handleAdd = e => {
    e.preventDefault();

    dispatch(addRoutineProduct({ routine, id }))
  }

  const handleRemove = e => {
    e.preventDefault();

    // dispatch(addRoutineProduct({ routine, id }))
  }

  // if (!userRoutines) return null;

  return (
    <div>
      <button onClick={() => setAddShowRoutines(!showAddRoutines)}>Add to Routine</button>
      {showAddRoutines &&
        <form action='' onSubmit={handleAdd}>
        <select name='routines' id='' onChange={e => setRoutine(e.target.value)} value={routine} required>
            <option value=''>Select Routine</option>
            {userRoutines.map(routine => (
              <option key={routine.id} value={routine.routine_type}>{routine.routine_type}</option>
            ))}
          </select>
          <button>Add</button>
        </form>
      }
      <button onClick={() => setShowRemoveRoutines(!showRemoveRoutines)}>Remove from Routine</button>
      {showRemoveRoutines &&
        <form action='' onSubmit={handleRemove}>
          <select name='routines' id='' onChange={e => setRoutine(e.target.value)} value={routine} required>
            <option value=''>Select Routine</option>
            {userRoutines.map(routine => (
              <option key={routine.id} value={routine.routine_type}>{routine.routine_type}</option>
            ))}
          </select>
          <button>Remove</button>
        </form>
      }
    </div>
  )
}

export default RoutineProduct;