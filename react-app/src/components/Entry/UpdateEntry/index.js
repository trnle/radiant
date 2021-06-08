import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { updateOneEntry } from '../../../store/entries';
import './UpdateEntry.css';

const UpdateEntry = () => {
  // document.title = 'Entry | Radiant';
  // document.body.style = 'background-color: #FFFFFF';
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  // const user = useSelector(state => state.session.user);
  // const entry = useSelector(state => state.entries.oneEntry);
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [rating, setRating] = useState('');
  const [editForm, setEditForm] = useState(false);

  const updateEntry = e => {
    e.preventDefault();

    dispatch(updateOneEntry({img, description, rating, id}));
  }

  return (
   <div>
      <button onClick={() => setEditForm(!editForm)} value={editForm}>Edit Entry</button>
      {editForm && <form id='entry-form-container' onSubmit={updateEntry}>
        <label>Photo</label>
        <input type='text'
          placeholder='Insert Image URL'
          onChange={e => setImg(e.target.value)}
          value={img} />
        <label>Journal Entry</label>
        <textarea
          name='description'
          placeholder='What was your skin like today?'
          onChange={e => setDescription(e.target.value)}
          value={description}
          cols='5'
          rows='7'>
        </textarea>
        <label>Rating</label>
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
        <div>
          <button id='update-entry-btn'>Save Entry</button>
        </div>
      </form>}
   </div>
  )
}

export default UpdateEntry;