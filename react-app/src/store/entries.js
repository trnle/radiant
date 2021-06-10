const LOAD_ENTRIES = 'routines/LOAD_ENTRIES';
const LOAD_ENTRY = 'routines/LOAD_ENTRY';
const CREATE_ENTRY = 'routines/CREATE_ENTRY';
const UPDATE_ENTRY = 'products/UPDATE_ENTRY';
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

const updateEntry = entry => ({
  type: UPDATE_ENTRY,
  entry
})

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

export const getExisting = () => async dispatch => {
  const res = await fetch('/api/entries/existing');
  const data = await res.json();

  if (res.ok) dispatch(loadEntry(data));
}

export const createSimpleEntry = data => async dispatch => {
  const { img, rating, description, currentDate } = data;
  const res = await fetch(`/api/entries/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      img_url: img,
      rating,
      description,
      created_at: currentDate
    }),
  });
  const entry = await res.json();

  if (res.ok) dispatch(createEntry(entry));
  return entry;
}

export const createAMEntry = data => async dispatch => {
  const { amProducts, currentDate } = data;
  const res = await fetch(`/api/entries/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      am_products: amProducts,
      created_at: currentDate
    }),
  });
  const entry = await res.json();

  if (res.ok) dispatch(createEntry(entry));
  return entry;
}

export const createPMEntry = data => async dispatch => {
  const { pmProducts, currentDate } = data;
  // console.log(currentDate,'===')
  const res = await fetch(`/api/entries/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      pm_products: pmProducts,
      created_at: currentDate
    }),
  });
  const entry = await res.json();

  if (res.ok) dispatch(createEntry(entry));
  return entry;
}

export const updateOneEntry = data => async dispatch => {
  const { img, description, rating, amProducts, pmProducts, id } = data
  const res = await fetch(`/api/entries/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      img_url: img,
      description,
      rating,
      am_products: amProducts,
      pm_products: pmProducts
    }),
  });
  const entry = await res.json();
  if (!res.ok) throw res;

  dispatch(updateEntry(entry));
  dispatch(getEntry(id));

  return entry
}

export const deleteOneEntry = id => async dispatch => {
  const res = await fetch(`/api/entries/${id}`, {
    method: 'DELETE',
  })

  if (!res.ok) throw res;
  dispatch(deleteEntry(id))
}


const initialState = { userEntries: {}, oneEntry: {}, newEntry: {} }

export default function reducer(state = initialState, action) {
  let newState = {}
  switch (action.type) {
    case LOAD_ENTRIES:
      return { ...state, userEntries: action.entries }
    case LOAD_ENTRY:
      return { ...state, oneEntry: action.entry }
    case CREATE_ENTRY:
      return { ...state, newEntry: action.entry }
      // newState = { ...state, [action.entry.id]: action.entry } // wrong format?
      // return newState
    case UPDATE_ENTRY:
      newState = { ...state, [action.entry.id]: action.entry }
      return newState
    case DELETE_ENTRY:
      newState = { ...state }
      delete newState[action.entry]
      return newState
    default:
      return state
  }
}