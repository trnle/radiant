const LOAD_ROUTINES = 'routines/LOAD_ROUTINES';

const loadRoutines = routines => ({
  type: LOAD_ROUTINES,
  routines
})

export const getRoutines = () => async dispatch => {
  const res = await fetch('/api/routines/');
  const data = await res.json();

  if (res.ok) dispatch(loadRoutines(data));
}

const initialState = { userRoutines: {} }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ROUTINES:
      return {...state, userRoutines: action.routines }
    default:
      return state
  }
}