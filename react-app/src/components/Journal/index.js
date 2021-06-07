import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getEntries } from '../../store/entries';
import './Journal.css';

const Journal = () => {
  document.title = 'Journal | Radiant';
  document.body.style = 'background-color: #FFFFFF';
  const dispatch = useDispatch();
  const history = useHistory();
  const entries = useSelector(state => state.entries.userEntries);
  
  useEffect(() => {
    dispatch(getEntries())
  }, [dispatch])


  return (
    <div id='journal-page'>
      <h1>Care Journal</h1>
      <div id='entries-list'>
        {Object.values(entries).map(entry => (
            <div key={entry.id} className='entry-info' onClick={e => { e.preventDefault(); history.push(`/journal/${entry.id}`) }}>
              <h4>{entry.created_at}</h4>
              {entry.description && <p>{entry.description}</p>}
              {entry.rating && <p>Skin rating: {entry.rating}</p>}
            </div>
        ))}
      </div>
    </div>
  )
}

export default Journal;