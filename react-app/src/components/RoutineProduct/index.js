import React, { useEffect, userEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { getRoutines } from '../../store/routines';
import { addRoutineProduct } from '../../store/routineProducts';

const RoutineProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const userRoutines = useSelector(state => state.routines.userRoutines.user_routines);
  const [showRoutines, setShowRoutines] = useState(false);
  const [routine, setRoutine] = useState(false);
  
  useEffect(() => {
    dispatch(getRoutines());
  }, [dispatch])
  
  let routineId;
  
  const setRoutineId = e => {
    setRoutine(e.target.value)
    for (let routine in userRoutines) {
      if (routine.routine_type === routine) {
        routineId = routine.id
      }
    }
  }
  
  const handleAdd = e => {
    e.preventDefault();
    
    console.log(routine, 'routine id test using the key---------')
    dispatch(addRoutineProduct({ routine, id }))
  }
  // if (!userRoutines) return null;

  return (
    <div>
      <button onClick={() => setShowRoutines(!showRoutines)}>Add to Routine</button>
      {showRoutines &&
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
    </div>
  )
}

export default RoutineProduct;