import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getEntry } from '../../store/entries';
import './Entry.css';

const Entry = () => {
  document.title = 'Entry | Radiant';
  document.body.style = 'background-color: #FFFFFF';
  const { id } = useParams();

  const dispatch = useDispatch();
  const entry = useSelector(state => state.entries.oneEntry);

  useEffect(() => {
    dispatch(getEntry(id))
  }, [dispatch, id])


  return (
    <div id='entry-page'>
      <div id='entry-summary'>
        <h4>{entry.created_at}</h4>
        {entry.img_url && <img src={entry.img_url} alt="Image of skin progress" />}
        <p>{entry.description}</p>
        <p>{entry.am_products}</p>
        <p>{entry.pm_products}</p>
        <p>Skin rating: {entry.rating}</p>
      </div>
    </div>
  )
}

export default Entry;