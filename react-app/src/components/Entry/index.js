import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getEntry, deleteOneEntry } from '../../store/entries';
import './Entry.css';
import UpdateEntry from './UpdateEntry';

const Entry = () => {
  document.title = 'Entry | Radiant';
  document.body.style = 'background-color: #FFFFFF';
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const entry = useSelector(state => state.entries.oneEntry);

  useEffect(() => {
    dispatch(getEntry(id))
  }, [dispatch, id])

  const deleteEntry = async e => {
    e.preventDefault();
    await dispatch(deleteOneEntry(id));
    history.push('/journal');
  }

  if (!entry) return null

  return (
    <div id='entry-page'>
      <div id='entry-summary'>
        <h4>{entry.created_at}</h4>
        {entry.img_url && <img src={entry.img_url} alt="Skin progress" />}
        <p>{entry.description}</p>
        <p>Morning Products: {entry.am_products}</p>
        <p>Evening Products: {entry.pm_products}</p>
        <p>Skin rating: {entry.rating}</p>
        {user.id === entry.user_id &&
          <div>
            <UpdateEntry />
            <button onClick={deleteEntry}>Delete entry</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Entry;