import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { updateOneEntry, deleteOneEntry, getEntry } from '../../../store/entries';
import './UpdateEntry.css';

const UpdateEntry = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const entry = useSelector(state => state.entries.oneEntry);

  const [description, setDescription] = useState(entry.description || '');
  const [img, setImg] = useState(entry.img_url);
  const [rating, setRating] = useState(entry.rating || '');
  const [amProducts, setAMProducts] = useState(entry.am_products || '');
  const [pmProducts, setPMProducts] = useState(entry.pm_products || '');
  const [editForm, setEditForm] = useState(false);

  const updateEntry = e => {
    e.preventDefault();
    setEditForm(!editForm)
    dispatch(updateOneEntry({ img, description, rating, amProducts, pmProducts, id }));
  }

  const deleteEntry = async e => {
    e.preventDefault();

    await dispatch(deleteOneEntry(id));
    history.push('/journal');
  }

  useEffect(() => {
    dispatch(getEntry(id));
  }, [dispatch, id])

  return (
    <div>
      {!editForm && <button id='edit-entry-btn' onClick={() => setEditForm(!editForm)} value={editForm}>Edit Entry</button>}
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
        <label>Skin Rating</label>
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
          <button id='cancel-entry-btn' onClick={() => setEditForm(!editForm)}>Cancel</button>
        </div>
      </form>}
    </div>
  )
}

export default UpdateEntry;