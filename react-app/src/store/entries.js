const LOAD_ENTRIES = 'routines/LOAD_ENTRIES';
const LOAD_ENTRY = 'routines/LOAD_ENTRY';

const loadEntries = entries => ({
  type: LOAD_ENTRIES,
  entries
})

const loadEntry = entry => ({
  type: LOAD_ENTRY,
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

const initialState = { userEntries: {}, oneEntry: {} }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ENTRIES:
      return { ...state, userEntries: action.entries }
    case LOAD_ENTRY:
      return { ...state, oneEntry: action.entry };
    default:
      return state
  }
}