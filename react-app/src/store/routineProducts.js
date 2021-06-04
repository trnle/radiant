const CREATE_ROUTINE_PRODUCT = 'routines/CREATE_ROUTINE_PRODUCT';

const createRP = routineProduct => ({
  type: CREATE_ROUTINE_PRODUCT,
  routineProduct
})

export const addRoutineProduct = rpData => async dispatch => {
  const { routine, id } = rpData;
  const res = await fetch('/api/routine_products/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      routine_type: routine,
      product_id: id
    }),
  })

  const routineProduct = await res.json();
  if (res.ok) dispatch(createRP(routineProduct));
  return routineProduct;
}

const initialState = { newRoutineProduct: {} }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ROUTINE_PRODUCT:
      return { ...state, newRoutineProduct: action.routineProduct }
    default:
      return state
  }
}