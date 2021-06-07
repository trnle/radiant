const LOAD_ENTRIES = 'routines/LOAD_ENTRIES';
const LOAD_ENTRY = 'routines/LOAD_ENTRY';
const CREATE_ENTRY = 'routines/CREATE_ENTRY';

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

const initialState = { userEntries: {}, oneEntry: {} }

export default function reducer(state = initialState, action) {
  let newState = {}
  switch (action.type) {
    case LOAD_ENTRIES:
      return { ...state, userEntries: action.entries }
    case LOAD_ENTRY:
      return { ...state, oneEntry: action.entry }
    case CREATE_ENTRY:
      newState = { ...state, [action.entry.id]: action.entry }
      return newState
    default:
      return state
  }
}