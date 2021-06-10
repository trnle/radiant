import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { getEntry } from '../../store/entries';
import entryImg from '../../images/entryImg.png';
import './Entry.css';
import UpdateEntry from './UpdateEntry';

const Entry = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user);
  const entry = useSelector(state => state.entries.oneEntry);
  
  useEffect(() => {
    dispatch(getEntry(id));
  }, [dispatch, id])

  if (!entry) return null;

  document.title = `${entry.created_at} | Radiant`;
  document.body.style = 'background-color: #FFFFFF';
  
  if (!entry.img_url) entry.img_url = entryImg;

  return (
    <div id='entry-page'>
      <div id='nav-entries'>
        <span className="fas fa-arrow-left"></span>
        <NavLink to='/journal'>Back to Journal</NavLink>
      </div>
      <div id='entry'>
        <h4>{entry.created_at}</h4>
        <div id='entry-summary'>
          {entry.img_url && <img src={entry.img_url} alt="Skin progress" height='70' />}
          <div>
            <h5>AM Products:</h5>
            <p>{entry.am_products}</p>
            <h5>PM Products:</h5>
            <p>{entry.pm_products}</p>
            <h5>Skin rating:</h5>
            <p>{entry.rating}</p>
          </div>
        </div>
        <div id='entry-description'>
          <h5>Journal Entry:</h5>
          <p>{entry.description}</p>
        </div>
        {user.id === entry.user_id &&
          <div>
            <UpdateEntry entry={entry} />
          </div>
        }
      </div>
    </div>
  )
}

export default Entry;