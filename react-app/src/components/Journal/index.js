import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEntries } from '../../store/entries';
import './Journal.css';

const Journal = () => {
  document.title = 'Journal | Radiant';
  document.body.style = 'background-color: #FFFFFF';
  const dispatch = useDispatch();
  const entries = useSelector(state => state.entries.userEntries);
  
  useEffect(() => {
    dispatch(getEntries())
  }, [dispatch])


  return (
    <div id='journal-page'>
      <div id='entries-list'>
        {Object.values(entries).map(entry => (
          <div key={entry.id}>
            {entry.created_at}
            {entry.description}
            {entry.rating}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Journal;