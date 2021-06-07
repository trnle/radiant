const LOAD_ENTRIES = 'routines/LOAD_ENTRIES';
const LOAD_ENTRY = 'routines/LOAD_ENTRY';
const CREATE_ENTRY = 'routines/CREATE_ENTRY';
// const UPDATE_ENTRY = 'products/UPDATE_ENTRY';
const DELETE_ENTRY = 'products/DELETE_ENTRY';

const loadEntries = entries => ({
  type: LOAD_ENTRIES,
  entries
})

const loadEntry = entry => ({
  type: LOAD_ENTRY,
  entry
})

const createEntry = entry => ({
  type: CREATE_ENTRY,
  entry
})

// const updateEntry = entry => ({
//   type: UPDATE_ENTRY,
//   entry
// })

const deleteEntry = entry => ({
  type: DELETE_ENTRY,
  entry
})

export const getEntries = () => async dispatch => {
  const res = await fetch('/api/entries/');
  const data = await res.json();

  if (res.ok) dispatch(loadEntries(data));
}

export const getEntry = id => async dispatch => {
  const res = await fetch(`/api/entries/${id}`);
  const data = await res.json();

  if (res.ok) dispatch(loadEntry(data));
}

export const createOneEntry = data => async dispatch => {
  const { amProducts } = data;
  const res = await fetch(`/api/entries/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      am_products: amProducts
    }),
  });
  const entry = await res.json();

  if (res.ok) dispatch(createEntry(entry));
  return entry;
}

// export const updateOneEntry = data => async dispatch => {
//   const { entryImg, entryId } = data
//   const res = await fetch(`/api/entries/${entryId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       img_url: entryImg,
//       description,
//       rating,
//       am_products,
//       pm_products
//     }),
//   });
//   const product = await res.json();
//   if (!res.ok) throw res;

//   dispatch(updateEntry(product));
//   dispatch(getOneProduct(productId));

//   return product
// }

export const deleteOneEntry = id => async dispatch => {
  const res = await fetch(`/api/entries/${id}`, {
    method: 'DELETE',
  })

  if (!res.ok) throw res;
  dispatch(deleteEntry(id))
}


const initialState = { userEntries: {}, oneEntry: {} }

export default function reducer(state = initialState, action) {
  let newState = {}
  switch (action.type) {
    case LOAD_ENTRIES:
      return { ...state, userEntries: action.entries }
    case LOAD_ENTRY:
      return { ...state, oneEntry: action.entry }
    case CREATE_ENTRY:
      newState = { ...state, [action.entry.id]: action.entry } // wrong format
      return newState
    // case UPDATE_ENTRY:
    //   newState = { ...state, [action.entry.id]: action.entry }
    //   return newState
    case DELETE_ENTRY:
      newState = { ...state }
      delete newState[action.entry]
      return newState
    default:
      return state
  }
}