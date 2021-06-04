import React, { useEffect, userEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink, useHistory } from 'react-router-dom';
// import { getRoutines } from '../../store/routines';

const RoutineProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const userRoutines = useSelector(state => state.routines.userRoutines);
  const [showRoutines, setShowRoutines] = useState(false);
  const [routine, setRoutine] = useState(false);
  // useEffect(() => {
  //   dispatch(getRoutines());
  // }, [dispatch])
  const handleClick = () => {

  }


  return (
    <div>
      <button onClick={() => setShowRoutines(!showRoutines)}>Add to Routine</button>
      {showRoutines &&
        <form action=''>
          <select name='routines' id='' onChange={e => setRoutine(e.target.value)} value={routine} required>
            <option value=''>Select Routine</option>
            <option value='AM'>AM</option>
            <option value='PM'>PM</option>
          </select>
        </form>
      }
    </div>
  )
}

export default RoutineProduct;