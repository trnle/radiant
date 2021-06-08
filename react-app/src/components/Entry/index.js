import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { getEntry, deleteOneEntry } from '../../store/entries';
import entryImg from '../../images/entryImg.png';
import './Entry.css';
import UpdateEntry from './UpdateEntry';

const Entry = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const entry = useSelector(state => state.entries.oneEntry);
  
  
  useEffect(() => {
    dispatch(getEntry(id));
  }, [dispatch, id])
  
  const deleteEntry = async e => {
    e.preventDefault();
    await dispatch(deleteOneEntry(id));
    history.push('/journal');
  }
  
  if (!entry) return null;
  document.title = `${entry.created_at} | Radiant`;
  document.body.style = 'background-color: #FFFFFF';
  
  if (!entry.img_url) entry.img_url = entryImg;

  return (
    <div id='entry-page'>
      <div id='nav-entries'>
        <NavLink to='/journal'>Back to Journal</NavLink>
      </div>
      <div id='entry-summary'>
        <h4>{entry.created_at}</h4>
        {entry.img_url && <img src={entry.img_url} alt="Skin progress" height='70' />}
        <p>{entry.description}</p>
        <p>Morning Products: {entry.am_products}</p>
        <p>Evening Products: {entry.pm_products}</p>
        <p>Skin rating: {entry.rating}</p>
        {user.id === entry.user_id &&
          <div>
            <UpdateEntry entry={entry} />
            <button onClick={deleteEntry}>Delete entry</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Entry;