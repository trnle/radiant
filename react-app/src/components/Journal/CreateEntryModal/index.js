import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createSimpleEntry } from '../../../store/entries';
import './CreateEntryModal.css';

const CreateEntryModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  let newDate = new Date().toDateString().split(' ');
  const [currentDate, setCurrentDate] = useState(`${newDate[1]} ${newDate[2]}, ${newDate[3]}`);

  const handleSubmit = async e => {
    e.preventDefault();
    const entry = await dispatch(createSimpleEntry({ img, rating, description, currentDate }));
    history.push(`/journal/${entry.id}`);
  }

  return (
    <div className='modal'>
      <button id='entry-modal-btn' onClick={() => setShowModal(true)} >
        Create Entry
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <form id='create-entry-form' onSubmit={handleSubmit}>
            <div id='create-entry-header'>
              <h1>New Entry</h1>
            </div>
            <div id='create-entry-fields'>
              <label>Photo</label>
              <input type='text'
                placeholder='Insert Image URL'
                onChange={e => setImg(e.target.value)}
                value={img} />
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
              <label>Journal Entry</label>
              <textarea
                name='description'
                placeholder='What was your skin like today?'
                onChange={e => setDescription(e.target.value)}
                value={description}
                cols='5'
                rows='7'>
              </textarea>
            </div>
            <div id='entry-btns'>
              <button type='button' id='cancel-entry-btn' onClick={() => setShowModal(false)}>Cancel</button>
              <button id='add-entry-btn' type='submit'>Publish Entry</button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  )
}

export default CreateEntryModal;