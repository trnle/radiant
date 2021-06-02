import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from "../../store/session";

const LogoutButton = () => {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = e => {
    history.push('/');
    dispatch(logout());
  };

  return (
    <div className='nav-bar-links'>
      {user && <button id='logout-btn' onClick={onLogout}>Log Out</button>}
    </div>
  );
}

export default LogoutButton;
