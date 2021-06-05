const LOAD_ENTRIES = 'routines/LOAD_ENTRIES';

const loadEntries = entries => ({
  type: LOAD_ENTRIES,
  entries
})

export const getEntries = () => async dispatch => {
  const res = await fetch('/api/entries/');
  const data = await res.json();

  if (res.ok) dispatch(loadEntries(data));
}

const initialState = { userEntries: {} }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ENTRIES:
      return { ...state, userEntries: action.entries }
    default:
      return state
  }
}