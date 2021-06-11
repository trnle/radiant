import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink, useHistory } from 'react-router-dom';
import { getEntry, updateOneEntry, deleteOneEntry } from '../../store/entries';
import entryImg from '../../images/entry-img.png';
import Swal from 'sweetalert2'
import './Entry.css';

const Entry = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector(state => state.session.user);
  const entry = useSelector(state => state.entries.oneEntry);

  const [description, setDescription] = useState(entry.description || '');
  const [img, setImg] = useState(entry.img_url);
  const [rating, setRating] = useState(entry.rating || '');
  const [amProducts, setAMProducts] = useState(entry.am_products || '');
  const [pmProducts, setPMProducts] = useState(entry.pm_products || '');
  const [editForm, setEditForm] = useState(false);

  const updateEntry = e => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Entry Updated!',
    })
    setEditForm(!editForm)
    dispatch(updateOneEntry({ img, description, rating, amProducts, pmProducts, id }));
  }

  const deleteEntry = async e => {
    e.preventDefault();
    Swal.fire({
      title: 'Delete Product',
      text: 'Are you sure you want to delete this entry permanently?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      reverseButtons: true
    }).then(async res => {
      if (res.value) {
        await dispatch(deleteOneEntry(id));
        history.push('/journal');
      }
    })
  }

  useEffect(() => {
    dispatch(getEntry(id));
  }, [dispatch, id])

  useEffect(() => {
    setDescription(entry.description || '')
    setImg(entry.img_url);
    setAMProducts(entry.am_products || '');
    setPMProducts(entry.pm_products || '');
    setRating(entry.rating || '')
  }, [entry])

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
        {!editForm &&
          <span>
            <div id='entry-summary'>
              {entry.img_url && <img src={entry.img_url} alt="Skin progress" height='70' />}
              <div>
                <h5>AM Products</h5>
                <p>{entry.am_products}</p>
                <h5>PM Products</h5>
                <p>{entry.pm_products}</p>
                <h5>Skin rating</h5>
                <p>{entry.rating}</p>
              </div>
            </div>
            <div id='entry-description'>
              <h5>Journal Entry</h5>
              <p>{entry.description}</p>
            </div>
          </span>}
        {user.id === entry.user_id &&
          <div>
            {!editForm &&
              <div id='edit-btn-container'><button id='edit-entry-btn' onClick={() => setEditForm(!editForm)} value={editForm}>Edit Entry</button></div>
            }
            {editForm && <form id='entry-form-container' onSubmit={updateEntry}>
              <h4>Edit Journal Entry</h4>
              <label>Photo</label>
              <input type='text'
                placeholder='Insert Image URL'
                onChange={e => setImg(e.target.value)}
                value={img} />
              <label>Skin Rating</label>
              <select onChange={e => setRating(e.target.value)} value={rating}>
                <option value="" disabled></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <label>AM Products</label>
              <input type='text'
                placeholder='AM Products'
                onChange={e => setAMProducts(e.target.value)}
                value={amProducts} />
              <label>PM Products</label>
              <input type='text'
                placeholder='PM Products'
                onChange={e => setPMProducts(e.target.value)}
                value={pmProducts} />
              <label>Journal Entry</label>
              <textarea
                name='description'
                placeholder='What was your skin like today?'
                onChange={e => setDescription(e.target.value)}
                value={description}
                cols='5'
                rows='7'>
              </textarea>
              <div>
                <button id='update-entry-btn'>Save Entry</button>
                <button id='delete-entry-btn' onClick={deleteEntry}>Delete entry</button>
                <button id='cancel-entry-btn' onClick={e => { e.preventDefault(); setEditForm(!editForm) }}>Cancel</button>
              </div>
            </form>}
          </div>
        }
      </div>
    </div>
  )
}

export default Entry;