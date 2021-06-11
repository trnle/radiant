import React, { useState, useEffect } from "react";
import { useHistory, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from "../../store/session";

function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  const onLogout = e => {
    history.push('/');
    dispatch(logout());
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  return (
    <>
      <button id='profile-btn'>
        <i className="fas fa-cog" onClick={openMenu}></i>
      </button>
      {showMenu && (
        <div className="dropdown-menu">
          <div onClick={() => history.push('/guide')}>
            <NavLink to='/guide' exact={true} id='guide-nav'>About Us</NavLink>
          </div>
          <div onClick={(onLogout)}>
            <NavLink to='/' id='logout-btn' onClick={onLogout}>Log Out</NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;